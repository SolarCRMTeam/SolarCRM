using API.Framework.EventBus;

namespace API.Application.Client.Commands.Update
{
    public class UpdateClientCommand : ICommand
    {
        public string Name { get; set; }
    }
}
