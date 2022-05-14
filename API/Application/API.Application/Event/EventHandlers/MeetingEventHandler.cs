using API.Contract;
using API.Domain.Enums;
using API.Framework.EventBus;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Event.EventHandlers
{
    public class MeetingEvent : ICommand
    {
        public Domain.Models.Event Model { get; set; }
        public Meeting Meeting { get; set; }
        public DateTime? MeetingDate { get; set; }
    }

    public class MeetingEventHandler : ICommandHandler<MeetingEvent>
    {
        private readonly IEventRepository _eventRepository;
        public MeetingEventHandler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        public async Task<Unit> Handle(MeetingEvent request, CancellationToken cancellationToken)
        {
            request.Model.Process.Meeting = request.Meeting;
            request.Model.MeetingDate = request.MeetingDate;
            request.Model.Process.Status = ParseStatus(request.Meeting);

            await _eventRepository.SaveChanges(cancellationToken);

            return Unit.Value;
        }

        private static string ParseStatus<T>(T item)
        {
            var result = item.ToString().Replace('_', ' ');

            return result;
        }
    }
}
