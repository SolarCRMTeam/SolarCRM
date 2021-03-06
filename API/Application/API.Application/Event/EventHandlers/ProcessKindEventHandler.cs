using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class ProcessKindEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public ProcessKind ProcessKind { get; set; }
    }

    public class ProcessKindEventHandler : ICommandHandler<ProcessKindEvent>
    {
        private readonly IEventRepository _eventRepository;
        public ProcessKindEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(ProcessKindEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Kind = request.ProcessKind;
            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
