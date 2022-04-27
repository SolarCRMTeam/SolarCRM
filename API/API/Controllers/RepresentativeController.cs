using API.Application.DTO;
using API.Application.Representative.Commands.Create;
using API.Application.Representative.Commands.Delete;
using API.Application.Representative.Commands.Import;
using API.Application.Representative.Commands.Update;
using API.Application.Representative.Queries;
using API.Framework.EventBus;
using API.Framework.Sieve;
using API.Infrastructure.Attributes;
using API.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;
using System;
using System.Net;
using System.Net.Mime;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Infrastructure.Attributes.Authorize]
    [ApiController]
    [Route("[controller]")]
    public class RepresentativeController : ControllerBase
    {
        private readonly IInternalBus _internalBus;
        private readonly IUserService _userService;  

        public RepresentativeController(IInternalBus internalBus, IUserService userService)
        {
            _internalBus = internalBus;
            _userService = userService;
        }

        [HttpGet("{id}")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(RepresentativeDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetRepresentativeById(Guid id)
        {
            var query = new GetRepresentativeQuery
            {
                Id = id
            };

            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }

        [HttpGet]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(PagedResult<RepresentativeDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetRepresentatives([FromQuery] SieveModel sieve)
        {
            var query = new GetRepresentativesQuery
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
        public async Task<IActionResult> Create([FromBody] CreateRepresentativeCommand command)
        {
            var id = await _internalBus.SendCommandAsync(command);
            return Ok(id);
        }

        [HttpPut]
        [Produces(MediaTypeNames.Application.Json)]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(Guid), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Update([FromBody] UpdateRepresentativeCommand command)
        {
            await _internalBus.SendCommandAsync(command);
            return Ok();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteRepresentativeCommand
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
        public async Task<IActionResult> Import([FromForm] ImportRepresentativeCommand command)
        {
            await _internalBus.SendCommandAsync(command);

            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateDto model)
        {
            var user = await _userService.Authenticate(model.Login, model.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }
    }
}
