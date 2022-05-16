using API.Contract;
using API.Contract.External;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class InstallationEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public Installation Installation { get; set; }
    }

    public class InstallationEventHandler : ICommandHandler<InstallationEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IMailService _mailService;
        public InstallationEventHandler(IEventRepository eventRepository, IMailService mailService)
        {
            _eventRepository = eventRepository;
            _mailService = mailService;
        }
        public async Task<Unit> Handle(InstallationEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Installation = request.Installation;
            request.Model.Process.Status = ParseStatus(request.Installation);
            await _eventRepository.SaveChanges(cancellationToken);

            if(request.Installation == Installation.Montaż)
            {
                string text = $"Szanowny kliencie,{Environment.NewLine}potwierdzamy zaplanowanie montażu.{Environment.NewLine}W celu ustalenia daty montażu nasz przedstawiciel skontaktuje się {Environment.NewLine}telefonicznie z Państwem w ciągu najbliższych dwóch dni.{Environment.NewLine}Z poważaniem, {Environment.NewLine}Biuro SolarCRM";

                _mailService.Publish(new Message
                {
                    Topic = "Instalacja",
                    From = "arkes987@gmail.com",
                    To = new[] { request.Model.Process.Client.Mail },
                    Body = text
                });
            }

            return Unit.Value;
        }

        private static string ParseStatus<T>(T item)
        {
            var result = item.ToString().Replace('_', ' ');

            return result;
        }
    }
}
