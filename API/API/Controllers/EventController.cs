using API.Application.DTO;
using API.Application.Event.Queries;
using API.Framework.EventBus;
using API.Infrastructure.Attributes;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Net.Mime;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly IInternalBus _internalBus;

        public EventController(IInternalBus internalBus)
        {
            _internalBus = internalBus;
        }
        [HttpGet("processId")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(EventDto[]), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetEvents(Guid processId)
        {
            var query = new GetEventsQuery()
            {
                ProcessId = processId
            };

            var result = await _internalBus.ExecuteQueryAsync(query);

            return Ok(result);
        }
    }
}
