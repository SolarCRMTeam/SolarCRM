using System.Collections.Generic;

namespace NotiWorker.Models.Interfaces
{
    public interface IMessage : IMailMessage
    {
        public string Topic { get; set; }
        public string Body { get; set; }

    }

    public interface IMailMessage
    {
        public IList<string> To { get; set; }
        public string From { get; set; }
    }
}
