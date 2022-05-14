using API.Contract;
using API.Contract.External;
using Microsoft.Extensions.Configuration;
using RabbitMQ.Client;
using System;
using System.Text;
using System.Text.Json;

namespace API.Infrastructure.Services
{
    public class MailService : IMailService
    {
        private readonly IConfiguration _configuration;
        public MailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void Publish(Message message)
        {
            int.TryParse(_configuration["BusConfig:Port"], out var port);

            var factory = new ConnectionFactory() { HostName = _configuration["BusConfig:HostName"], Port = port };



            using var connection = factory.CreateConnection();

            using var channel = connection.CreateModel();

            channel.QueueDeclare(queue: _configuration["BusConfig:MailQueueName"],
                                 durable: true,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

            string jsonString = JsonSerializer.Serialize<Message>(message);

            var body = Encoding.UTF8.GetBytes(jsonString);

            channel.BasicPublish(exchange: "",
                                 routingKey: _configuration["BusConfig:MailQueueName"],
                                 basicProperties: null,
                                 body: body);
        }
    }
}
