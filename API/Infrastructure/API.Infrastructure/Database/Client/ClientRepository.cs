using API.Contract;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Client
{
    public class ClientRepository : IClientRepository
    {
        private readonly DatabaseContext _databaseContext;
        public ClientRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<Guid> AddAsync(Domain.Models.Client client, CancellationToken cancellationToken)
        {
            await _databaseContext.AddAsync(client, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return client.Id;
        }
    }
}
