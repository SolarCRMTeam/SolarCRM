using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using Sieve.Models;

namespace API.Application.Process.Queries
{
    public class GetProcessesQuery : IQuery<PagedResult<ProcessDto>>
    {
        public SieveModel Sieve { get; set; }
    }
}
