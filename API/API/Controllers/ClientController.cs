using API.Application.Client.Commands.Create;
using API.Application.Client.Commands.Delete;
using API.Application.Client.Commands.Import;
using API.Application.Client.Commands.Update;
using API.Application.Client.Queries;
using API.Application.DTO;
using API.Framework.EventBus;
using API.Framework.Sieve;
using API.Infrastructure.Attributes;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;
using System;
using System.Net;
using System.Net.Mime;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
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
        public async Task<IActionResult> GetClientById(Guid id)
        {
            var query = new GetClientQuery
            {
                Id = id
            };
            
            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }
        [HttpGet("all")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(ClientDto[]), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetAllClients()
        {
            var query = new GetAllClientsQuery();

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
        public async Task<IActionResult> CreateClient([FromBody] CreateClientCommand command)
        {
            var id = await _internalBus.SendCommandAsync(command);
            return Ok(id);
        }

        [HttpPut]
        [Produces(MediaTypeNames.Application.Json)]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Guid), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> UpdateClient([FromBody] UpdateClientCommand command)
        {
            await _internalBus.SendCommandAsync(command);
            return Ok();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> DeleteClient(Guid id)
        {
            var command = new DeleteClientCommand
            {
                Id = id
            };

            await _internalBus.SendCommandAsync(command);

            return Ok();
        }

        [HttpPost("import")]
        [DisableRequestSizeLimit]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> ImportClient([FromForm] ImportClientCommand command)
        {
            await _internalBus.SendCommandAsync(command);

            return Ok();
        }
    }
}
