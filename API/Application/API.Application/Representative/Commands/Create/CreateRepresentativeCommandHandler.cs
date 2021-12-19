using API.Contract;
using API.Framework.EventBus;
using AutoMapper;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Representative.Commands.Create
{
    public class CreateRepresentativeCommandHandler : ICommandHandler<CreateRepresentativeCommand, Guid>
    {
        private readonly IMapper _mapper;
        private readonly IRepresentativeRepository _representativeRepository;

        public CreateRepresentativeCommandHandler(IRepresentativeRepository representativeRepository, IMapper mapper)
        {
            _representativeRepository = representativeRepository;
            _mapper = mapper;
        }

        public async Task<Guid> Handle(CreateRepresentativeCommand request, CancellationToken cancellationToken)
        {
            var representative = _mapper.Map<Domain.Models.Representative>(request);

            var id = await _representativeRepository.AddAsync(representative, cancellationToken);

            return id;
        }
    }
}
