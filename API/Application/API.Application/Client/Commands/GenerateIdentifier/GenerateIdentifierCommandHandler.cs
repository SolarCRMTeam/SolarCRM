using API.Contract;
using API.Framework.EventBus;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.GenerateIdentifier
{
    public class GenerateIdentifierCommandHandler : ICommandHandler<GenerateIdentifierCommand, string>
    {
        private readonly IClientRepository _clientRepository;
        public GenerateIdentifierCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<string> Handle(GenerateIdentifierCommand request, CancellationToken cancellationToken)
        {
            var number = await _clientRepository.GetCount(cancellationToken) + 1;
            return $"{request.ClientType[..1]}{number}";
        }
    }
}
