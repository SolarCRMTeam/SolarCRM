using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{

    public class FinalInvoiceEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public string FinalInvoice { get; set; }
    }

    public class FinalInvoiceEventHandler : ICommandHandler<FinalInvoiceEvent>
    {
        private readonly IEventRepository _eventRepository;
        public FinalInvoiceEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(FinalInvoiceEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.FinalInvoice = request.FinalInvoice;
            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
