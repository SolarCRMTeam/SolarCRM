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

        #region Advance
        public DateTime? AdvanceDate { get; set; }
        public decimal? Advance { get; set; }
        #endregion

        #region Audit
        public Audit Audit { get; set; }
        public AuditPlace AuditPlace { get; set; }
        public AuditOrientation AuditOrientation { get; set; }
        public AuditShading AuditShading { get; set; }
        public AuditWorkScope AuditWorkScope { get; set; }
        public int AuditSurface { get; set; }
        public decimal AuditElectricBill { get; set; }
        public string Warnings { get; set; }
        #endregion

        #region ProjectAccept
        public ProjectAccept ProjectAccept { get; set; }
        #endregion

        #region Installation
        public Installation? Installation { get; set; }
        #endregion
    }
}
