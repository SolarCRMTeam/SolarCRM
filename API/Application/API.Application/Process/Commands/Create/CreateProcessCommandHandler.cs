using API.Domain.Enums;
using API.Framework.EventBus;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Process.Commands.Create
{
    public class CreateProcessCommandHandler : ICommandHandler<CreateProcessCommand, Guid>
    {
        public Task<Guid> Handle(CreateProcessCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
