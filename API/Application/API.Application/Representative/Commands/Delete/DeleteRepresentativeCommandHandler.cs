using API.Contract;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Representative.Commands.Delete
{
    public class DeleteRepresentativeCommandHandler : ICommandHandler<DeleteRepresentativeCommand>
    {
        private readonly IRepresentativeRepository _representativeRepository;
        public DeleteRepresentativeCommandHandler(IRepresentativeRepository representativeRepository)
        {
            _representativeRepository = representativeRepository;
        }
        public async Task<Unit> Handle(DeleteRepresentativeCommand request, CancellationToken cancellationToken)
        {
            var representative = await _representativeRepository.GetById(request.Id, cancellationToken);

            if (representative == null)
            {
                throw new Exception($"Unable to find representative with id {request.Id}");
            }

            await _representativeRepository.DeleteAsync(representative, cancellationToken);

            return Unit.Value;
        }
    }
}
