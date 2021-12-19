using API.Application.DTO;
using API.Framework.EventBus;
using System;

namespace API.Application.Representative.Queries
{
    public class GetRepresentativeQuery : IQuery<RepresentativeDto>
    {
        public Guid Id { get; set; }
    }
}
