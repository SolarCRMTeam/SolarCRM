using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class OperatorRequestEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public OperatorRequest OperatorRequest { get; set; }
    }

    public class OperatorRequestEventHandler : ICommandHandler<OperatorRequestEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IInternalBus _internalBus;
        public OperatorRequestEventHandler(IEventRepository eventRepository, IInternalBus internalBus)
        {
            _eventRepository = eventRepository;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(OperatorRequestEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.OperatorRequest = request.OperatorRequest;
            await _eventRepository.SaveChanges(cancellationToken);
            return Unit.Value;
        }
    }
}
