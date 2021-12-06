using MediatR;
using System.Threading.Tasks;

namespace API.Framework.EventBus
{
    public class InMemoryBus : IInternalBus
    {
        private readonly IMediator _mediator;

        public InMemoryBus(
            IMediator mediator
            )
        {
            _mediator = mediator;
        }

        public async Task SendCommandAsync(ICommand command)
            => await _mediator.Send(command);

        public async Task<TResponse> ExecuteQueryAsync<TResponse>(IQuery<TResponse> query)
            => await _mediator.Send(query);

        public async Task<TResponse> SendCommandAsync<TResponse>(ICommand<TResponse> command)
            => await _mediator.Send(command);

    }
}
