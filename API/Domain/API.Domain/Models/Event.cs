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
    }
}
