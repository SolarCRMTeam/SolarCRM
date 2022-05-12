using API.Domain.Enums;
using System;

namespace API.Application.DTO
{
    public class EventDto
    {
        public Guid Id { get; set; }
        public EventType EventType { get; set; }
        public DateTime Created { get; set; }
    }
}
