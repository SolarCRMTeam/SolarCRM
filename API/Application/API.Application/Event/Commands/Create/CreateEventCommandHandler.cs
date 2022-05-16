using API.Application.Event.EventHandlers;
using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using AutoMapper;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.Commands.Create
{
    public class CreateEventCommandHandler : ICommandHandler<CreateEventCommand, Guid>
    {
        private readonly IMapper _mapper;
        private readonly IEventRepository _eventRepository;
        private readonly IProcessRepository _processRepository;
        private readonly IInternalBus _bus;
        public CreateEventCommandHandler(IMapper mapper, IEventRepository eventRepository, IProcessRepository processRepository, IInternalBus internalBus)
        {
            _mapper = mapper;
            _eventRepository = eventRepository;
            _processRepository = processRepository;
            _bus = internalBus;
        }
        public async Task<Guid> Handle(CreateEventCommand request, CancellationToken cancellationToken)
        {
            var mappedEvent = _mapper.Map<Domain.Models.Event>(request);
            mappedEvent.Created = DateTime.Now;

            mappedEvent.Process = await _processRepository.GetById(request.ProcessId, cancellationToken);

            var model = await _eventRepository.AddAsync(mappedEvent, cancellationToken);

            await ProcessEventByType(mappedEvent.EventType, model, request);

            return model.Id;
        }

        private async Task ProcessEventByType(EventType eventType, Domain.Models.Event model, CreateEventCommand command)
        {

            switch (eventType)
            {
                case EventType.Rodzaj_zlecenia:
                    await _bus.SendCommandAsync(new ProcessKindEvent()
                    {
                        Model = model,
                        ProcessKind = command.ProcessKind.GetValueOrDefault(),
                    });
                    break;
                case EventType.Spotkanie:
                    await _bus.SendCommandAsync(new MeetingEvent()
                    {
                        Model = model,
                        Meeting = command.Meeting.GetValueOrDefault(),
                        MeetingDate = command.MeetingDate,
                    });
                    break;
                case EventType.Wartość_umowy:
                    await _bus.SendCommandAsync(new ContractValueEvent()
                    {
                        Model = model,
                        ContractValue = command.ContractValue.GetValueOrDefault()
                    });
                    break;
                case EventType.Wielkość_instalacji_ilość_kWp:
                    await _bus.SendCommandAsync(new InstallationSizeEvent()
                    {
                        Model = model,
                        InstallationSize = command.InstallationSize.GetValueOrDefault()
                    });
                    break;
                case EventType.Zaliczka:
                    await _bus.SendCommandAsync(new AdvanceEvent()
                    {
                        Model = model,
                        Advance = command.Advance.GetValueOrDefault(),
                        AdvanceDate = command.AdvanceDate.GetValueOrDefault()
                    });
                    break;
                case EventType.Audyt:
                    await _bus.SendCommandAsync(new AuditEvent
                    {
                        Model = model,
                        Audit = command.Audit,
                        AuditPlace = command.AuditPlace,
                        AuditOrientation = command.AuditOrientation,
                        AuditShading = command.AuditShading,
                        AuditWorkScope = command.AuditWorkScope,
                        AuditSurface = command.AuditSurface,
                        AuditElectricBill = command.AuditElectricBill,
                        Warnings = command.Warnings,
                    });
                    break;
                case EventType.Akceptacja_projektu:
                    await _bus.SendCommandAsync(new ProjectAcceptEvent()
                    {
                        Model = model,
                        ProjectAccept = command.ProjectAccept
                    });
                    break;
                case EventType.Montaż:
                    await _bus.SendCommandAsync(new InstallationEvent()
                    {
                        Model = model,
                        Installation = command.Installation.GetValueOrDefault(),
                    });
                    break;
                case EventType.Wniosek_do_operatora:
                    await _bus.SendCommandAsync(new OperatorRequestEvent()
                    {
                        Model = model,
                        OperatorRequest = command.OperatorRequest.GetValueOrDefault()
                    });
                    break;
                case EventType.Faktura_końcowa:
                    await _bus.SendCommandAsync(new FinalInvoiceEvent()
                    {
                        Model = model,
                        FinalInvoice = command.FinalInvoice
                    });
                    break;
                case EventType.Rozliczenie_końcowe:
                    await _bus.SendCommandAsync(new FinalBillingEvent()
                    {
                        Model = model,
                        FinalBilling = command.FinalBilling.GetValueOrDefault()
                    });
                    break;
                case EventType.Aplikacja:
                    await _bus.SendCommandAsync(new ApplicationEvent()
                    {
                        Model = model,
                        Application = command.Application.GetValueOrDefault()
                    });
                    break;
            }
        }
    }
}
