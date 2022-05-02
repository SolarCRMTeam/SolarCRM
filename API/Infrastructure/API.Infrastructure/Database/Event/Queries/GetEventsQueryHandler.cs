using API.Application.DTO;
using API.Application.Event.Queries;
using API.Framework.EventBus;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Event.Queries
{
    public class GetEventsQueryHandler : IQueryHandler<GetEventsQuery, EventDto[]>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly IMapper _mapper;
        public GetEventsQueryHandler(DatabaseContext databaseContext, IMapper mapper)
        {
            _databaseContext = databaseContext;
            _mapper = mapper;
        }
        public async Task<EventDto[]> Handle(GetEventsQuery request, CancellationToken cancellationToken)
        {
            var result = await _databaseContext.Events
                .Include(x => x.Process)
                .Where(e => e.Process.Id == request.ProcessId)
                .AsNoTracking()
                .ToListAsync(cancellationToken: cancellationToken);

            return _mapper.Map<EventDto[]>(result);
        }
    }
}
