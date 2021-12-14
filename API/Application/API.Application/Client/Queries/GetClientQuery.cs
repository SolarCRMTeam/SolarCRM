using API.Application.DTO;
using API.Framework.EventBus;
using System;

namespace API.Application.Client.Queries
{
    public class GetClientQuery : IQuery<ClientDto>
    {
        public Guid Id { get; set; }
    }
}
