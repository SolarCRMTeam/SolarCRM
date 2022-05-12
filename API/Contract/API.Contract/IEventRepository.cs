using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IEventRepository
    {
        Task<Domain.Models.Event> AddAsync(Event model, CancellationToken cancellationToken);
        Task SaveChanges(CancellationToken cancellationToken);
    }
}
