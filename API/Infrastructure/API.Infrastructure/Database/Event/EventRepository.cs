using API.Contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Event
{
    public class EventRepository : IEventRepository
    {
        private readonly DatabaseContext _databaseContext;
        public EventRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        public async Task<Domain.Models.Event> AddAsync(Domain.Models.Event model, CancellationToken cancellationToken)
        {
            await _databaseContext.Events.AddAsync(model, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return await _databaseContext.Events.Include(x => x.Process).FirstOrDefaultAsync(x => x.Id == model.Id, cancellationToken: cancellationToken);
        }

        public async Task SaveChanges(CancellationToken cancellationToken)
            => await _databaseContext.SaveChangesAsync(cancellationToken);
    }
}
