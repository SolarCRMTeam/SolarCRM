using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IRepresentativeRepository
    {
        Task<Representative> GetById(Guid id, CancellationToken cancellationToken);
        Task<Guid> AddAsync(Representative client, CancellationToken cancellationToken);
        Task Update(Representative client, CancellationToken cancellationToken);
        Task DeleteAsync(Representative client, CancellationToken cancellationToken);
    }
}
