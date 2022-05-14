using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class ContractValueEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public decimal ContractValue { get; set; }
    }

    public class ContractValueEventHandler : ICommandHandler<ContractValueEvent>
    {
        private readonly IEventRepository _eventRepository;
        public ContractValueEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(ContractValueEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.OfferValue = request.ContractValue;

            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
