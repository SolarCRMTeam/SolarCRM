using API.Domain.Enums;
using API.Framework.EventBus;
using System;

namespace API.Application.Event.Commands.Create
{
    public class CreateEventCommand : ICommand<Guid>
    {
        public Guid ProcessId { get; set; }
        public EventType EventType { get; set; }

        #region ProcessKind
        public ProcessKind? ProcessKind { get; set; }
        #endregion

        #region Meeting
        public Meeting? Meeting { get; set; }
        public DateTime? MeetingDate { get; set; }
        #endregion

        #region ContractValue
        public decimal? ContractValue { get; set; }
        #endregion

        #region InstallationSize
        public decimal? InstallationSize { get; set; }
        #endregion
    }
}
