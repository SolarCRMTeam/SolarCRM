using System.Collections.Generic;

namespace API.Contract.External
{
    public class Message : IMessage
    {
        public string Topic { get; set; }
        public string Body { get; set; }
        public IList<string> To { get; set; }
        public string From { get; set; }
    }
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
