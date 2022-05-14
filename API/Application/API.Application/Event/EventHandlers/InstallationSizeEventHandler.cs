using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class InstallationSizeEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public decimal InstallationSize { get; set; }
    }

    public class InstallationSizeEventHandler : ICommandHandler<InstallationSizeEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IInternalBus _internalBus;
        public InstallationSizeEventHandler(IEventRepository eventRepository, IInternalBus internalBus)
        {
            _eventRepository = eventRepository;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(InstallationSizeEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.InstallationSize = request.InstallationSize;
            await _eventRepository.SaveChanges(cancellationToken);
            return Unit.Value;
        }
    }
}
