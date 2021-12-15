using API.Application.Client.Commands.Create;
using API.Application.Client.Commands.Update;
using API.Application.DTO;
using AutoMapper;
using System;

namespace API.Application.Mappings
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Domain.Models.Client, ClientDto>();
            CreateMap<CreateClientCommand, Domain.Models.Client>()
                 .ForMember(dest => dest.Id, src => src.MapFrom(x => Guid.NewGuid()));

            CreateMap<UpdateClientCommand, Domain.Models.Client>()
                .ForMember(dest => dest.Id, src => src.Ignore());
        }
    }
}
