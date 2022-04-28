using API.Contract;
using System;
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
        public async Task<Guid> AddAsync(Domain.Models.Process process, CancellationToken cancellationToken)
        {
            await _databaseContext.Process.AddAsync(process, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return process.Id;
        }
    }
}
