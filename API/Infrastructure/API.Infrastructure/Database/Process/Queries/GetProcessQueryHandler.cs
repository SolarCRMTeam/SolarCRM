using API.Application.DTO;
using API.Application.Process.Queries;
using API.Framework.EventBus;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Process.Queries
{
    public class GetProcessQueryHandler : IQueryHandler<GetProcessQuery, ProcessDto>
    {
        public Task<ProcessDto> Handle(GetProcessQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
