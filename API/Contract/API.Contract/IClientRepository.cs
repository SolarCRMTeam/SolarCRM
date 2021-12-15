using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IClientRepository
    {
        Task<Client> GetById(Guid id, CancellationToken cancellationToken);
        Task<Guid> AddAsync(Client client, CancellationToken cancellationToken);
        Task Update(Client client, CancellationToken cancellationToken);
        Task DeleteAsync(Client client, CancellationToken cancellationToken);
    }
}
