using API.Framework.EventBus;

namespace API.Application.Client.Commands.GenerateIdentifier
{
    public class GenerateIdentifierCommand : ICommand<string>
    {
        public string ClientType { get; set; }
    }
}
