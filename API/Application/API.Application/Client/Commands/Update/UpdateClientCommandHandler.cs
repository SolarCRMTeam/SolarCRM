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

        public UpdateClientCommandHandler(IClientRepository clientRepository, IMapper mapper)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
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
            await _clientRepository.Update(client, cancellationToken);

            return Unit.Value;
        }
    }
}
