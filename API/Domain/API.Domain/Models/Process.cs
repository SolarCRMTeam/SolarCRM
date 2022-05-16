using API.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Domain.Models
{
    public class Process
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public string Status { get; set; }
        public DateTime? Updated { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
        public ProcessKind Kind { get; set; }
        public Meeting? Meeting { get; set; }
        public decimal? OfferValue { get; set; }
        public decimal? InstallationSize { get; set; }
        public decimal? Advance { get; set; }
        public Audit? Audit { get; set; }
        public ProjectAccept? ProjectAccepted { get; set; }
        public Installation? Installation { get; set; }
        public OperatorRequest? OperatorRequest { get; set; }
        public string FinalInvoice { get; set; }
        public DateTime? FinalBilling { get; set; }
        public DateTime? Application { get; set; }
        public Guid RepresentativeId { get; set; }
        [ForeignKey("RepresentativeId")]
        public Representative Representative { get; set; }
        public Guid ClientId { get; set; }
        [ForeignKey("ClientId")]
        public Client Client { get; set; }

        public ICollection<Event> Events { get; set; }
    }
}
