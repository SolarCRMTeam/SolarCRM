using System.Threading.Tasks;

namespace NotiWorker.Models.Interfaces
{
    public interface IDistributionChannel
    {
        Task Handle(IMessage message);
    }
}
