using NotiWorker.Models.Interfaces;
using System.Collections.Generic;

namespace NotiWorker.Models
{
    public class MailMessage : IMessage
    {
        public string Topic { get; set; }
        public string Body { get; set; }
        public IList<string> To { get; set; }
        public string From { get; set; }
    }
}
