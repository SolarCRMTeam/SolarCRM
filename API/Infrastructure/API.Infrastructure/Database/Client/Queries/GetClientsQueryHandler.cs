using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sieve.Services;
using System.Collections.Generic;
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
            var data = _databaseContext.Clients.AsNoTracking();
            var result = _sieveProcessor.Apply(request.Sieve, data);

            var output = await result.ToListAsync(cancellationToken);

            return new PagedResult<ClientDto>
            {
                CurrentPage = request.Sieve.Page.Value,
                PageSize = request.Sieve.PageSize.Value,
                RowCount = output.Count,
                Results = _mapper.Map<ClientDto[]>(output)
            };
        }
    }
}
