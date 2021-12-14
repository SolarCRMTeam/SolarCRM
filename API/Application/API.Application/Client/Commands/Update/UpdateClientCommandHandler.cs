using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.Update
{
    public class UpdateClientCommandHandler : ICommandHandler<UpdateClientCommand>
    {
        public Task<Unit> Handle(UpdateClientCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
