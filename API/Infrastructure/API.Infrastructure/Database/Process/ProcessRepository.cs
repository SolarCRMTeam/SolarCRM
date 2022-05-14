using API.Contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Process
{
    public class ProcessRepository : IProcessRepository
    {
        private readonly DatabaseContext _databaseContext;
        public ProcessRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        public async Task<Domain.Models.Process> AddAsync(Domain.Models.Process process, CancellationToken cancellationToken)
        {
            await _databaseContext.Process.AddAsync(process, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            var identifier = process.Id;

            return await _databaseContext.Process.Include(x => x.Client).FirstOrDefaultAsync(x => x.Id == identifier, cancellationToken: cancellationToken);
        }
        public async Task DeleteAsync(Domain.Models.Process process, CancellationToken cancellationToken)
        {
            _databaseContext.Process.Remove(process);
            await _databaseContext.SaveChangesAsync(cancellationToken);
        }

        public async Task<Domain.Models.Process> GetById(Guid id, CancellationToken cancellationToken)
            => await _databaseContext.Process.Include(x => x.Client).FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        public async Task<long> GetCount(CancellationToken cancellationToken)
        {
            var entity = await _databaseContext.Process.AsNoTracking().OrderByDescending(x => x.Created).Select(x => x.Identifier).FirstOrDefaultAsync(cancellationToken: cancellationToken);

            if (entity == null)
                return 1;

            var identifier = entity[4..];

            if (long.TryParse(identifier, out var count))
            {
                return count + 1;
            }

            return 1;
        }
    }
}
