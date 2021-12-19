using API.Framework.EventBus;
using System;

namespace API.Application.Representative.Commands.Create
{
    public class CreateRepresentativeCommand : ICommand<Guid>
    {
        public string Name { get; set; }
    }
}
