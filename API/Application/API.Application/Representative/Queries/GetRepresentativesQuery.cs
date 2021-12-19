using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using Sieve.Models;

namespace API.Application.Representative.Queries
{
    public class GetRepresentativesQuery : IQuery<PagedResult<RepresentativeDto>>
    {
        public SieveModel Sieve { get; set; }
    }
}
