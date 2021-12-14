using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.Delete
{
    public class DeleteClientCommandHandler : ICommandHandler<DeleteClientCommand>
    {
        private readonly IClientRepository _clientRepository;

        public DeleteClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<Unit> Handle(DeleteClientCommand request, CancellationToken cancellationToken)
        {
            var client = await _clientRepository.GetById(request.Id, cancellationToken);

            if(client == null)
            {
                throw new Exception($"Unable to find client with id {request.Id}");
            }

            await _clientRepository.DeleteAsync(client, cancellationToken);

            return Unit.Value;
        }
    }
}
