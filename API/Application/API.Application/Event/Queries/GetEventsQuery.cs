using API.Application.DTO;
using API.Framework.EventBus;
using System;

namespace API.Application.Event.Queries
{
    public class GetEventsQuery : IQuery<EventDto[]>
    {
        public Guid ProcessId { get; set; }
    }
}
