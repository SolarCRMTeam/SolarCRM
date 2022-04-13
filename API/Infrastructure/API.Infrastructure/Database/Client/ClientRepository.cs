using API.Contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
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
            await _databaseContext.Clients.AddAsync(client, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return client.Id;
        }

        public async Task DeleteAsync(Domain.Models.Client client, CancellationToken cancellationToken)
        {
            _databaseContext.Clients.Remove(client);
            await _databaseContext.SaveChangesAsync(cancellationToken);
        }

        public async Task<Domain.Models.Client> GetById(Guid id, CancellationToken cancellationToken)
            => await _databaseContext.Clients.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        public async Task<long> GetCount(CancellationToken cancellationToken)
        {
            var entity = await _databaseContext.Clients.AsNoTracking().OrderByDescending(x => x.Created).Select(x => x.Identifier).FirstOrDefaultAsync(cancellationToken: cancellationToken);

            if (entity == null)
                return 1;

            var identifier = entity.Substring(1, entity.Length - 1);

            if(long.TryParse(identifier, out var count))
            {
                return count + 1;
            }

            return 1;
        }

        public async Task Update(Domain.Models.Client client, CancellationToken cancellationToken)
        {
            _databaseContext.Clients.Update(client);
            await _databaseContext.SaveChangesAsync(cancellationToken);
        }
    }
}
