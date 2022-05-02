using API.Contract;
using API.Framework.EventBus;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Process.Commands.GenerateIdentifier
{
    public class GenerateIdentifierCommandHandler : ICommandHandler<GenerateIdentifierCommand, string>
    {
        private readonly IProcessRepository _processRepository;
        public GenerateIdentifierCommandHandler(IProcessRepository processRepository)
        {
            _processRepository = processRepository;
        }
        public async Task<string> Handle(GenerateIdentifierCommand request, CancellationToken cancellationToken)
        {
            var number = await _processRepository.GetCount(cancellationToken);
            return $"Zlec{number}";
        }
    }
}
