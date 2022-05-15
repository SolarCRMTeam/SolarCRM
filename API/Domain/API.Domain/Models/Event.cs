using API.Domain.Enums;
using System;

namespace API.Domain.Models
{
    public class Event
    {
        public Guid Id { get; set; }
        public Process Process { get; set; }
        public EventType EventType { get; set; }
        public DateTime Created { get; set; }

        #region Meeting
        public Meeting Meeting { get; set; }
        public DateTime? MeetingDate { get; set; }
        #endregion

        #region Advance
        public DateTime AdvanceDate { get; set; }
        #endregion
        #region Audit
        public AuditPlace AuditPlace { get; set; }
        public AuditOrientation AuditOrientation { get; set; }
        public AuditShading AuditShading { get; set; }
        public AuditWorkScope AuditWorkScope { get; set; }
        public int AuditSurface { get; set; }
        public decimal AuditElectricBill { get; set; }
        public string Warnings { get; set; }
        #endregion
    }
}
