using API.Contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Representative
{
    public class RepresentativeRepository : IRepresentativeRepository
    {
        private readonly DatabaseContext _databaseContext;
        public RepresentativeRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<Guid> AddAsync(Domain.Models.Representative representative, CancellationToken cancellationToken)
        {
            await _databaseContext.Representatives.AddAsync(representative, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return representative.Id;
        }

        public async Task DeleteAsync(Domain.Models.Representative representative, CancellationToken cancellationToken)
        {
            _databaseContext.Representatives.Remove(representative);
            await _databaseContext.SaveChangesAsync(cancellationToken);
        }

        public async Task<Domain.Models.Representative> GetById(Guid id, CancellationToken cancellationToken)
            => await _databaseContext.Representatives.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        public async Task Update(Domain.Models.Representative representative, CancellationToken cancellationToken)
        {
            _databaseContext.Representatives.Update(representative);
            await _databaseContext.SaveChangesAsync(cancellationToken);
        }
    }
}
