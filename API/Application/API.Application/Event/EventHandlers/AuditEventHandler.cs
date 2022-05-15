using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class AuditEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public Audit Audit { get; set; }
        public AuditPlace AuditPlace { get; set; }
        public AuditOrientation AuditOrientation { get; set; }
        public AuditShading AuditShading { get; set; }
        public AuditWorkScope AuditWorkScope { get; set; }
        public int AuditSurface { get; set; }
        public decimal AuditElectricBill { get; set; }
        public string Warnings { get; set; }
    }

    public class AuditEventHandler : ICommandHandler<AuditEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IInternalBus _internalBus;
        public AuditEventHandler(IEventRepository eventRepository, IInternalBus internalBus)
        {
            _eventRepository = eventRepository;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(AuditEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Audit = request.Audit;
            request.Model.AuditPlace = request.AuditPlace;
            request.Model.AuditOrientation = request.AuditOrientation;
            request.Model.AuditShading = request.AuditShading;
            request.Model.AuditSurface = request.AuditSurface;
            request.Model.AuditElectricBill = request.AuditElectricBill;
            request.Model.Warnings = request.Warnings;

            await _eventRepository.SaveChanges(cancellationToken);
            return Unit.Value;
        }
    }
}
