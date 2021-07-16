using Microsoft.Extensions.Configuration;
using NotiWorker.Models.Interfaces;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace NotiWorker.Services
{
    public class MailDistributionChannel : IDistributionChannel
    {
        private readonly IConfiguration _configuration;
        public MailDistributionChannel(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task Handle(IMessage message)
        {
            MailMessage mailMessage = new(message.From, message.To[0])
            {
                Subject = message.Topic,
                Body = message.Body
            };

            //SmtpClient client = new(_configuration["MailConfiguration:Hostname"])
            //{
            //    UseDefaultCredentials = true,
            //    Port = 25,
            //    EnableSsl = false
            //};

            var client = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential("", "")
            };

            try
            {
                client.Send(mailMessage);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception caught in CreateTestMessage2(): {0}", ex.ToString());
            }

            return Task.CompletedTask;
        }
    }
}
