using API.Application.DTO;
using API.Application.Process.Queries;
using API.Framework.Context;
using API.Framework.EventBus;
using API.Framework.Sieve;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sieve.Services;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Process.Queries
{
    public class GetProcessesQueryHandler : IQueryHandler<GetProcessesQuery, PagedResult<ProcessDto>>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly SieveProcessor _sieveProcessor;
        private readonly IMapper _mapper;
        private readonly RequestContext _requestContext;

        public GetProcessesQueryHandler(DatabaseContext databaseContext, SieveProcessor sieveProcessor, IMapper mapper, RequestContext requestContext)
        {
            _databaseContext = databaseContext;
            _sieveProcessor = sieveProcessor;
            _mapper = mapper;
            _requestContext = requestContext;
        }
        public async Task<PagedResult<ProcessDto>> Handle(GetProcessesQuery request, CancellationToken cancellationToken)
        {
            var representativeId = _requestContext.RepresentativeId;

            var data = _databaseContext.Process.Where(x => x.RepresentativeId == representativeId).OrderByDescending(x => x.Created).AsNoTracking();

            var rowCount = await _sieveProcessor.Apply(request.Sieve, data, applyPagination: false).CountAsync(cancellationToken);

            var result = await _sieveProcessor.Apply(request.Sieve, data).ToListAsync(cancellationToken);

            return new PagedResult<ProcessDto>
            {
                CurrentPage = request.Sieve.Page.GetValueOrDefault(),
                PageSize = request.Sieve.PageSize.GetValueOrDefault(),
                RowCount = rowCount,
                Results = _mapper.Map<ProcessDto[]>(result)
            };
        }
    }
}
