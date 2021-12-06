using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Client.Queries
{
    public class GetClientsQueryHandler : IQueryHandler<GetClientsQuery, PagedResult<ClientDto>>
    {
        private readonly DatabaseContext _databaseContext;
        public GetClientsQueryHandler(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        public Task<PagedResult<ClientDto>> Handle(GetClientsQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(new PagedResult<ClientDto>
            {
                CurrentPage = 1,
                RowCount = 1,
                PageSize = 1,
                Results = new List<ClientDto>()
                {
                    new ClientDto
                    {
                        Id = Guid.NewGuid(),
                        Name = "Nowy klient1"
                    }
                }
            });

            throw new System.NotImplementedException();
        }
    }
}
