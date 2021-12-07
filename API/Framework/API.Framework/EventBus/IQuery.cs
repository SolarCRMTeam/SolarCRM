using MediatR;

namespace API.Framework.EventBus
{
    public interface IQuery<out TResult> : IRequest<TResult>
    {
    }
}
