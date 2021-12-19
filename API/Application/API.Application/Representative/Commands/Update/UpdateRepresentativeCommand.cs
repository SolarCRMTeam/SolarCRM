using API.Framework.EventBus;
using System;

namespace API.Application.Representative.Commands.Update
{
    public class UpdateRepresentativeCommand : ICommand
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
