using API.Application.DTO;
using API.Application.Process.Commands.Create;
using API.Application.Process.Commands.Delete;
using API.Application.Process.Queries;
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
    public class ProcessController : ControllerBase
    {
        private readonly IInternalBus _internalBus;
        public ProcessController(IInternalBus internalBus)
        {
            _internalBus = internalBus;
        }

        [HttpGet("{id}")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(ProcessDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetProcessById(Guid id)
        {
            var query = new GetProcessQuery
            {
                Id = id
            };

            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }

        [HttpGet]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(PagedResult<ProcessDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetProcesses([FromQuery] SieveModel sieve)
        {
            var query = new GetProcessesQuery
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
        public async Task<IActionResult> CreateProcess([FromBody] CreateProcessCommand command)
        {
            var id = await _internalBus.SendCommandAsync(command);
            return Ok(id);
        }
        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> DeleteProcess(Guid id)
        {
            var command = new DeleteProcessCommand
            {
                Id = id
            };

            await _internalBus.SendCommandAsync(command);

            return Ok();
        }
    }
}
