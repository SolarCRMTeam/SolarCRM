using API.Contract;
using Microsoft.EntityFrameworkCore;
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
    }
}
