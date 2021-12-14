using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Client.Queries
{
    public class GetClientQueryHandler : IQueryHandler<GetClientQuery, ClientDto>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly IMapper _mapper;

        public GetClientQueryHandler(DatabaseContext databaseContext, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _mapper = mapper;
        }
        public async Task<ClientDto> Handle(GetClientQuery request, CancellationToken cancellationToken)
        {
            var client = await _databaseContext.Clients.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if(client == null)
            {
                throw new Exception($"Can't find client with id {request.Id}");
            }

            return _mapper.Map<ClientDto>(client);
        }
    }
}
