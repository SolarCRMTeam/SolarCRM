using API.Contract;
using API.Framework.EventBus;
using AutoMapper;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Representative.Commands.Update
{
    public class UpdateRepresentativeCommandHandler : ICommandHandler<UpdateRepresentativeCommand>
    {
        private readonly IMapper _mapper;
        private readonly IRepresentativeRepository _representativeRepository;
        public UpdateRepresentativeCommandHandler(IRepresentativeRepository representativeRepository, IMapper mapper)
        {
            _representativeRepository = representativeRepository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(UpdateRepresentativeCommand request, CancellationToken cancellationToken)
        {
            var representative = await _representativeRepository.GetById(request.Id, cancellationToken);

            if (representative == null)
            {
                throw new Exception($"Unable to find representative with id {request.Id}");
            }

            _mapper.Map(request, representative);

            await _representativeRepository.Update(representative, cancellationToken);

            return Unit.Value;
        }
    }
}
