using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NotiWorker.Models;
using NotiWorker.Models.Interfaces;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
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
        private ConnectionFactory _connectionFactory;
        private IConnection _connection;
        private IModel _channel;

        public Worker(ILogger<Worker> logger, BusConfig busConfig, IDistributionChannel distributionChannel)
        {
            _logger = logger;
            _busConfig = busConfig;
            _distributionChannel = distributionChannel;
        }
        public override Task StartAsync(CancellationToken cancellationToken)
        {
            _connectionFactory = new ConnectionFactory { HostName = _busConfig.HostName, Port = _busConfig.Port };
            _connection = _connectionFactory.CreateConnection();
            _channel = _connection.CreateModel();

            _channel.QueueDeclarePassive(_busConfig.MailQueueName);
            _channel.BasicQos(0, 1, false);
            _logger.LogInformation($"Queue [{_busConfig.MailQueueName}] is waiting for messages.");

            return base.StartAsync(cancellationToken);
        }

        public override async Task StopAsync(CancellationToken cancellationToken)
        {
            await base.StopAsync(cancellationToken);
            _connection.Close();
            _logger.LogInformation("RabbitMQ connection is closed.");
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _channel.QueueDeclare(queue: _busConfig.MailQueueName,
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);

            var consumer = new EventingBasicConsumer(_channel);


            consumer.Received += async (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var rawMessage = Encoding.UTF8.GetString(body);

                var message = JsonSerializer.Deserialize<MailMessage>(rawMessage);

                await _distributionChannel.Handle(message);
                _channel.BasicAck(ea.DeliveryTag, false);

                Console.WriteLine(" [x] Received {0} {1}", message, DateTimeOffset.Now);
            };

            _channel.BasicConsume(queue: _busConfig.MailQueueName,
                     autoAck: false,
                     consumer: consumer);

            await Task.CompletedTask;
        }
    }
}
