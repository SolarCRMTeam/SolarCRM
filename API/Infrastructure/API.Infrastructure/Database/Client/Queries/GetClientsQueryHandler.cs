using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sieve.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Client.Queries
{
    public class GetClientsQueryHandler : IQueryHandler<GetClientsQuery, PagedResult<ClientDto>>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly SieveProcessor _sieveProcessor;
        private readonly IMapper _mapper;
        public GetClientsQueryHandler(DatabaseContext databaseContext, SieveProcessor sieveProcessor, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _sieveProcessor = sieveProcessor;
            _mapper = mapper;
        }
        public async Task<PagedResult<ClientDto>> Handle(GetClientsQuery request, CancellationToken cancellationToken)
        {
            var data = _databaseContext.Clients.OrderByDescending(x => x.Created).AsNoTracking();

            var rowCount = await _sieveProcessor.Apply(request.Sieve, data, applyPagination: false).CountAsync(cancellationToken);

            var result = await _sieveProcessor.Apply(request.Sieve, data).ToListAsync(cancellationToken);

            return new PagedResult<ClientDto>
            {
                CurrentPage = request.Sieve.Page.GetValueOrDefault(),
                PageSize = request.Sieve.PageSize.GetValueOrDefault(),
                RowCount = rowCount,
                Results = _mapper.Map<ClientDto[]>(result)
            };
        }
    }
}
