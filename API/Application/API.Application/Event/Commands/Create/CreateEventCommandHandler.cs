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
        public CreateEventCommandHandler(IMapper mapper, IEventRepository eventRepository, IProcessRepository processRepository)
        {
            _mapper = mapper;
            _eventRepository = eventRepository;
            _processRepository = processRepository; 
        }
        public async Task<Guid> Handle(CreateEventCommand request, CancellationToken cancellationToken)
        {
            var mappedEvent = _mapper.Map<Domain.Models.Event>(request);
            mappedEvent.Created = DateTime.Now;

            mappedEvent.Process = await _processRepository.GetById(request.ProcessId, cancellationToken);

            var model = await _eventRepository.AddAsync(mappedEvent, cancellationToken);

            await SideEffects(mappedEvent.EventType, model, request);

            return model.Id;

        }

        private async Task SideEffects(EventType eventType, Domain.Models.Event model, CreateEventCommand command)
        {
            switch (eventType)
            {
                case EventType.Rodzaj_zlecenia:
                    model.Process.Kind = command.ProcessKind;
                    await _eventRepository.SaveChanges(default);
                    break;
            }
        }
    }
}
