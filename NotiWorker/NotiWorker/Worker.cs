using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NotiWorker.Models;
using NotiWorker.Models.Interfaces;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace NotiWorker
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly BusConfig _busConfig;
        private readonly IDistributionChannel _distributionChannel;

        public Worker(ILogger<Worker> logger, BusConfig busConfig, IDistributionChannel distributionChannel)
        {
            _logger = logger;
            _busConfig = busConfig;
            _distributionChannel = distributionChannel;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            var factory = new ConnectionFactory() { HostName = _busConfig.HostName, Port = _busConfig.Port };

            using IConnection connection = factory.CreateConnection();

            using IModel channel = connection.CreateModel();

            channel.QueueDeclare(queue: _busConfig.MailQueueName,
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);

            var consumer = new EventingBasicConsumer(channel);


            consumer.Received += (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var rawMessage = Encoding.UTF8.GetString(body);

                var message = JsonSerializer.Deserialize<MailMessage>(rawMessage);

                _distributionChannel.Handle(message);

                Console.WriteLine(" [x] Received {0} {1}", message, DateTimeOffset.Now);
            };

            channel.BasicConsume(queue: _busConfig.MailQueueName,
                     autoAck: true,
                     consumer: consumer);

            Console.ReadLine();
        }
    }
}
