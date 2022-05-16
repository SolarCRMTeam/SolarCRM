using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class FinalBillingEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public DateTime FinalBilling { get; set; }
    }

    public class FinalBillingEventHandler : ICommandHandler<FinalBillingEvent>
    {
        private readonly IEventRepository _eventRepository;
        public FinalBillingEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(FinalBillingEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.FinalBilling = request.FinalBilling;
            request.Model.Process.Status = "Zlecenie zamknięte";
            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
