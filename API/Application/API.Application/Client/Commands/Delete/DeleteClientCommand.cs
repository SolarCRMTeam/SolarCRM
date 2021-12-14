using API.Framework.EventBus;
using System;

namespace API.Application.Client.Commands.Delete
{
    public class DeleteClientCommand : ICommand
    {
        public Guid Id { get; set; }
    }
}
