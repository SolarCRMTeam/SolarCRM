using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class InstallationEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public Installation Installation { get; set; }
    }

    public class InstallationEventHandler : ICommandHandler<InstallationEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IInternalBus _internalBus;
        public InstallationEventHandler(IEventRepository eventRepository, IInternalBus internalBus)
        {
            _eventRepository = eventRepository;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(InstallationEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Installation = request.Installation;
            request.Model.Process.Status = ParseStatus(request.Installation);
            await _eventRepository.SaveChanges(cancellationToken);
            return Unit.Value;
        }

        private static string ParseStatus<T>(T item)
        {
            var result = item.ToString().Replace('_', ' ');

            return result;
        }
    }
}
