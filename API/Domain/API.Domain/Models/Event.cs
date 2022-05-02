using System;

namespace API.Domain.Models
{
    public class Event
    {
        public Guid Id { get; set; }
        public Process Process { get; set; }
    }
}
