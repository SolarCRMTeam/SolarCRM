using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IClientRepository
    {
        Task<Guid> AddAsync(Client client, CancellationToken cancellationToken);
    }
}
