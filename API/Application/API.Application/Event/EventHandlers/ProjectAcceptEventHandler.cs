using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class ProjectAcceptEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public ProjectAccept ProjectAccept { get; set; }
    }

    public class ProjectAcceptEventHandler : ICommandHandler<ProjectAcceptEvent>
    {
        private readonly IEventRepository _eventRepository;
        public ProjectAcceptEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(ProjectAcceptEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.ProjectAccepted = request.ProjectAccept;
            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
