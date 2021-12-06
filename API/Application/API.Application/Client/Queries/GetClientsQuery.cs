using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using Sieve.Models;

namespace API.Application.Client.Queries
{
    public class GetClientsQuery : IQuery<PagedResult<ClientDto>>
    {
        public SieveModel Sieve { get; set; }
    }
}
