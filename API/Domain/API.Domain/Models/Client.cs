using API.Domain.Enums;
using System;

namespace API.Domain.Models
{
    public class Client
    {
        public Guid Id { get; set; }
        public string Identifier { get; set; }
        public string CompanyName { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Place { get; set; }
        public string Address { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public string Voivodeship { get; set; }
        public string District { get; set; }
        public string Mail { get; set; }
        public string PhoneNumber { get; set; }
        public string Comments { get; set; }
        public ClientType ClientType { get; set; }
    }
}
