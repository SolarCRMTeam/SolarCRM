using API.Application.Client.Commands;
using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;
using System;
using System.Net;
using System.Net.Mime;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IInternalBus _internalBus;
        public ClientController(IInternalBus internalBus)
        {
            _internalBus = internalBus;
        }

        [HttpGet("{id}")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(ClientDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetById(Guid id)
        {
            var query = new GetClientQuery
            {
                Id = id
            };
            
            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }

        [HttpGet]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(PagedResult<ClientDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetClients([FromQuery] SieveModel sieve)
        {
            var query = new GetClientsQuery
            {
                Sieve = sieve
            };

            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }

        [HttpPost]
        [Produces(MediaTypeNames.Application.Json)]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Guid), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Create([FromBody] CreateClientCommand command)
        {
            var id = await _internalBus.SendCommandAsync(command);
            return Ok(id);
        }
    }
}
