using API.Application.DTO;
using API.Framework.EventBus;
using System;

namespace API.Application.Process.Queries
{
    public class GetProcessQuery : IQuery<ProcessDto>
    {
        public Guid Id { get; set; }
    }
}
