using API.Framework.EventBus;
using System;

namespace API.Application.Client.Commands.Update
{
    public class UpdateClientCommand : ICommand
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
