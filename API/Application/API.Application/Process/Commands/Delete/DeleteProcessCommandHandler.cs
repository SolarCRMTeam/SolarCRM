using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Process.Commands.Delete
{
    public class DeleteProcessCommandHandler : ICommandHandler<DeleteProcessCommand>
    {
        private readonly IProcessRepository _processRepository;
        public DeleteProcessCommandHandler(IProcessRepository processRepository)
        {
            _processRepository = processRepository;
        }
        public async Task<Unit> Handle(DeleteProcessCommand request, CancellationToken cancellationToken)
        {
            var process = await _processRepository.GetById(request.Id, cancellationToken);

            if (process == null)
            {
                throw new Exception($"Unable to find process with id {request.Id}");
            }

            await _processRepository.DeleteAsync(process, cancellationToken);

            return Unit.Value;
        }
    }
}
