using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Client.Queries
{
    public class GetAllClientsQueryHandler : IQueryHandler<GetAllClientsQuery, ClientDto[]>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly IMapper _mapper;

        public GetAllClientsQueryHandler(DatabaseContext databaseContext, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _mapper = mapper;
        }
        public async Task<ClientDto[]> Handle(GetAllClientsQuery request, CancellationToken cancellationToken)
        {
            var result = await _databaseContext.Clients.AsNoTracking().ToListAsync(cancellationToken: cancellationToken);
            return _mapper.Map<ClientDto[]>(result);
        }
    }
}
