using API.Application.DTO;
using API.Application.Process.Queries;
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

        public GetProcessesQueryHandler(DatabaseContext databaseContext, SieveProcessor sieveProcessor, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _sieveProcessor = sieveProcessor;
            _mapper = mapper;
        }
        public async Task<PagedResult<ProcessDto>> Handle(GetProcessesQuery request, CancellationToken cancellationToken)
        {
            var data = _databaseContext.Process.OrderByDescending(x => x.Created).AsNoTracking();

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
