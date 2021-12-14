using API.Contract;
using API.Framework.EventBus;
using AutoMapper;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.Create
{
    public class CreateClientCommandHandler : ICommandHandler<CreateClientCommand, Guid>
    {
        private readonly IMapper _mapper;
        private readonly IClientRepository _clientRepository;
        public CreateClientCommandHandler(IClientRepository clientRepository, IMapper mapper)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
        }
        public async Task<Guid> Handle(CreateClientCommand request, CancellationToken cancellationToken)
        {
            var client = _mapper.Map<Domain.Models.Client>(request);

            var id = await _clientRepository.AddAsync(client, cancellationToken);

            return id;
        }
    }
}
