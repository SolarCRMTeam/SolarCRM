using API.Domain.Enums;
using API.Framework.EventBus;
using System;

namespace API.Application.Event.Commands.Create
{
    public class CreateEventCommand : ICommand<Guid>
    {
        public Guid ProcessId { get; set; }
        public EventType EventType { get; set; }
        public ProcessKind ProcessKind { get; set; }
    }
}
