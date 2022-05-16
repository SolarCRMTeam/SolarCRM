using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class ApplicationEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public DateTime Application { get; set; }
    }

    public class ApplicationEventHandler : ICommandHandler<ApplicationEvent>
    {
        private readonly IEventRepository _eventRepository;
        public ApplicationEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(ApplicationEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Application = request.Application;
            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
