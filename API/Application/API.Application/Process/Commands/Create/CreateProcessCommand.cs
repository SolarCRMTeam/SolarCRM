using API.Framework.EventBus;
using System;

namespace API.Application.Process.Commands.Create
{
    public class CreateProcessCommand : ICommand<Guid>
    {
        public Guid ClientId { get; set; }
        public ProcessKind ProcessKind { get; set; }
        public string Comments { get; set; }
    }
}
