using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IProcessRepository
    {
        Task<Process> AddAsync(Process process, CancellationToken cancellationToken);
        Task<long> GetCount(CancellationToken cancellationToken);
        Task DeleteAsync(Process process, CancellationToken cancellationToken);
        Task<Process> GetById(Guid id, CancellationToken cancellationToken);
    }
}
