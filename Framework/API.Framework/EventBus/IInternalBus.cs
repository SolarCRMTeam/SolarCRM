using System.Threading.Tasks;

namespace API.Framework.EventBus
{
    public interface IInternalBus
    {
        Task<TResponse> SendCommandAsync<TResponse>(ICommand<TResponse> command);
        Task SendCommandAsync(ICommand command);
        Task<TResponse> ExecuteQueryAsync<TResponse>(IQuery<TResponse> query);
    }
}
