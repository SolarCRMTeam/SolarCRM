using API.Application.DTO;
using API.Application.Representative.Commands.Create;
using API.Application.Representative.Commands.Update;
using AutoMapper;
using System;

namespace API.Application.Mappings
{
    public class RepresentativeProfile : Profile
    {
        public RepresentativeProfile()
        {
            CreateMap<Domain.Models.Representative, RepresentativeDto>();
            CreateMap<CreateRepresentativeCommand, Domain.Models.Representative>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => Guid.NewGuid()));

            CreateMap<UpdateRepresentativeCommand, Domain.Models.Representative>()
                .ForMember(dest => dest.Id, src => src.Ignore());
        }
    }
}
