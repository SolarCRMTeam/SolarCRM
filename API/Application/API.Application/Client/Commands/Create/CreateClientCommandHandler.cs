using API.Application.Client.Commands.GenerateIdentifier;
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
        private readonly IInternalBus _internalBus;
        public CreateClientCommandHandler(IClientRepository clientRepository, IMapper mapper, IInternalBus internalBus)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
            _internalBus = internalBus;
        }
        public async Task<Guid> Handle(CreateClientCommand request, CancellationToken cancellationToken)
        {
            var client = _mapper.Map<Domain.Models.Client>(request);
            client.Created = DateTime.Now;

            var identifier = await _internalBus.SendCommandAsync(new GenerateIdentifierCommand
            {
                ClientType = client.ClientType.ToString()
            });

            client.Identifier = identifier;

            var id = await _clientRepository.AddAsync(client, cancellationToken);

            return id;
        }
    }
}
