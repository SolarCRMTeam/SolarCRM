using API.Application.Client.Commands.GenerateIdentifier;
using API.Contract;
using API.Framework.EventBus;
using AutoMapper;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.Update
{
    public class UpdateClientCommandHandler : ICommandHandler<UpdateClientCommand>
    {
        private readonly IClientRepository _clientRepository;
        private readonly IMapper _mapper;
        private readonly IInternalBus _internalBus;

        public UpdateClientCommandHandler(IClientRepository clientRepository, IMapper mapper, IInternalBus internalBus)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(UpdateClientCommand request, CancellationToken cancellationToken)
        {
            var client = await _clientRepository.GetById(request.Id, cancellationToken);

            if (client == null)
            {
                throw new Exception($"Unable to find client with id {request.Id}");
            }

            _mapper.Map(request, client);
            client.Created = DateTime.UtcNow;

            var identifier = await _internalBus.SendCommandAsync(new GenerateIdentifierCommand
            {
                ClientType = client.ClientType.ToString()
            });

            client.Identifier = identifier;
            await _clientRepository.Update(client, cancellationToken);

            return Unit.Value;
        }
    }
}
