using API.Domain.Enums;
using System;

namespace API.Domain.Models
{
    public class Process
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public string Status { get; set; }
        public DateTime Updated { get; set; }
        public string Identifier { get; set; }
        public Guid ClientId { get; set; }
        public Client Client { get; set; }
        public string Name { get; set; }
        public ProcessKind Kind { get; set; }
        public Meeting Meeting { get; set; }
        public decimal OfferValue { get; set; }
        public decimal InstallationSize { get; set; }
        public decimal Advance { get; set; }
        public Audit Audit { get; set; }
        public bool ProjectAccepted { get; set; }
        public bool Assembly { get; set; }
        public OperatorRequest OperatorRequest { get; set; }
        public string FinalInvoice { get; set; }
        public DateTime FinalBilling { get; set; }
        public bool Application { get; set; }
    }
}
