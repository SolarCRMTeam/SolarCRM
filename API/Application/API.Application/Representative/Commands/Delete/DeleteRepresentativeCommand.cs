using API.Framework.EventBus;
using System;

namespace API.Application.Representative.Commands.Delete
{
    public class DeleteRepresentativeCommand : ICommand
    {
        public Guid Id { get; set; }
    }
}
