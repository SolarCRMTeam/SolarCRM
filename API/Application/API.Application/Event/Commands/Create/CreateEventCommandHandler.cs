using API.Contract;
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
        public CreateEventCommandHandler(IMapper mapper, IEventRepository eventRepository)
        {
            _mapper = mapper;
            _eventRepository = eventRepository;
        }
        public async Task<Guid> Handle(CreateEventCommand request, CancellationToken cancellationToken)
        {
            var mappedEvent = _mapper.Map<Domain.Models.Event>(request);
            mappedEvent.Created = DateTime.Now;

            var id = await _eventRepository.AddAsync(mappedEvent, cancellationToken);

            return id;

        }
    }
}
