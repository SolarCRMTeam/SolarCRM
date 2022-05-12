using API.Contract;
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
        public async Task<Guid> AddAsync(Domain.Models.Event model, CancellationToken cancellationToken)
        {
            await _databaseContext.Events.AddAsync(model, cancellationToken);
            await _databaseContext.SaveChangesAsync(cancellationToken);

            return model.Id;
        }
    }
}
