using API.Contract;
using API.Contract.External;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{

    public class AdvanceEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public DateTime AdvanceDate { get; set; }
        public decimal Advance { get; set; }
    }

    public class AdvanceEventHandler : ICommandHandler<AdvanceEvent>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IMailService _mailService;
        public AdvanceEventHandler(IEventRepository eventRepository, IMailService mailService)
        {
            _eventRepository = eventRepository;
            _mailService = mailService;
        }
        public async Task<Unit> Handle(AdvanceEvent request, CancellationToken cancellationToken)
        {
            request.Model.AdvanceDate = request.AdvanceDate;
            request.Model.Process.Advance = request.Advance;
            await _eventRepository.SaveChanges(cancellationToken);

            string text = $"Szanowny kliencie,{Environment.NewLine}potwierdzamy wpływ zaliczki w kwocie {request.Advance}zł na nasze konto.{Environment.NewLine}Dziękujemy za dokonaną wpłatę, niedługo odezwie się nasz przedstawiciel w celu ustalenia kolejnych kroków.{Environment.NewLine}Z poważaniem,{Environment.NewLine}Biuro SolarCRM";

            _mailService.Publish(new Message
            {
                Topic = "Wpłata zaliczki",
                From = "arkes987@gmail.com",
                To = new[] { request.Model.Process.Client.Mail },
                Body = text
            });

            return Unit.Value;
        }
    }
}
