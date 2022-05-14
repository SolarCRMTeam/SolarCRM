using API.Contract.External;

namespace API.Contract
{
    public interface IMailService
    {
        void Publish(Message message);
    }
}
