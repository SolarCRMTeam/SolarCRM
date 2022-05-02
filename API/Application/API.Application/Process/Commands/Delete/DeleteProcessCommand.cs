using API.Framework.EventBus;
using System;

namespace API.Application.Process.Commands.Delete
{
    public class DeleteProcessCommand : ICommand
    {
        public Guid Id { get; set; }
    }
}
