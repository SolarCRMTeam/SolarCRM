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

            decimal vatRate = 0.77m;

            if (request.Model.Process.Client.ClientType == Domain.Enums.ClientType.Prosument)
            {
                vatRate = 0.92m;
            }

            var previousContractValueNetto = request.Model.Process.OfferValue.GetValueOrDefault() * vatRate * request.Model.Process.InstallationSize.GetValueOrDefault();

            await _eventRepository.SaveChanges(cancellationToken);

            await _internalBus.SendCommandAsync(new ContractValueEvent()
            {
                Model = request.Model,
                ContractValue = previousContractValueNetto
            });

            return Unit.Value;
        }
    }
}
