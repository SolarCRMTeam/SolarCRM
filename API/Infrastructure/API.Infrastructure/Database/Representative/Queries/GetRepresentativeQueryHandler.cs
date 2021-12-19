using API.Application.DTO;
using API.Application.Representative.Queries;
using API.Framework.EventBus;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Representative.Queries
{

    public class GetRepresentativeQueryHandler : IQueryHandler<GetRepresentativeQuery, RepresentativeDto>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly IMapper _mapper;
        public GetRepresentativeQueryHandler(DatabaseContext databaseContext, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _mapper = mapper;
        }
        public async Task<RepresentativeDto> Handle(GetRepresentativeQuery request, CancellationToken cancellationToken)
        {
            var representative = await _databaseContext.Representatives.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (representative == null)
            {
                throw new Exception($"Can't find representative with id {request.Id}");
            }

            return _mapper.Map<RepresentativeDto>(representative);
        }
    }
}
