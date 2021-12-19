using API.Framework.EventBus;
using Microsoft.AspNetCore.Http;

namespace API.Application.Client.Commands.Import
{
    public class ImportClientCommand : ICommand
    {
        public IFormFile File { get; set; }
    }
}
