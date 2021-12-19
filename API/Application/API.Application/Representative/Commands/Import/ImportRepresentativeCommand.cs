using API.Framework.EventBus;
using Microsoft.AspNetCore.Http;

namespace API.Application.Representative.Commands.Import
{
    public class ImportRepresentativeCommand : ICommand
    {
        public IFormFile File { get; set; }
    }
}
