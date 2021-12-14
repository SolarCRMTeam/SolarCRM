

using API.Framework.EventBus;
using System;

namespace API.Application.Client.Commands.Create
{
    public class CreateClientCommand : ICommand<Guid>
    {
        public string Name { get; set; }
    }
}
