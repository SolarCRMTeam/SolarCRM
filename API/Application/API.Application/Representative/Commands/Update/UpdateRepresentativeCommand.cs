using API.Framework.EventBus;
using System;

namespace API.Application.Representative.Commands.Update
{
    public class UpdateRepresentativeCommand : ICommand
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Street { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string Place { get; set; }
        public string Voivodeship { get; set; }
        public string District { get; set; }
        public string Mail { get; set; }
        public string PhoneNumber { get; set; }
        public string Comments { get; set; }
    }
}
