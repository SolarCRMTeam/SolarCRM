namespace NotiWorker.Models
{
    public class BusConfig
    {
        public string HostName { get; set; }
        public string MailQueueName { get; set; }
        public int Port { get; set; }
    }
}
