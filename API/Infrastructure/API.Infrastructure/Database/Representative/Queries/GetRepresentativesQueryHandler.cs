using API.Application.DTO;
using API.Application.Representative.Queries;
using API.Framework.EventBus;
using API.Framework.Sieve;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sieve.Services;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Representative.Queries
{
    public class GetRepresentativesQueryHandler : IQueryHandler<GetRepresentativesQuery, PagedResult<RepresentativeDto>>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly SieveProcessor _sieveProcessor;
        private readonly IMapper _mapper;
        public GetRepresentativesQueryHandler(DatabaseContext databaseContext, SieveProcessor sieveProcessor, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _sieveProcessor = sieveProcessor;
            _mapper = mapper;
        }
        public async Task<PagedResult<RepresentativeDto>> Handle(GetRepresentativesQuery request, CancellationToken cancellationToken)
        {
            var data = _databaseContext.Representatives.AsNoTracking();
            var rowCount = await _sieveProcessor.Apply(request.Sieve, data, applyPagination: false).CountAsync(cancellationToken);
            var result = await _sieveProcessor.Apply(request.Sieve, data).ToListAsync(cancellationToken);

            return new PagedResult<RepresentativeDto>
            {
                CurrentPage = request.Sieve.Page.GetValueOrDefault(),
                PageSize = request.Sieve.PageSize.GetValueOrDefault(),
                RowCount = rowCount,
                Results = _mapper.Map<RepresentativeDto[]>(result)
            };
        }
    }
}
