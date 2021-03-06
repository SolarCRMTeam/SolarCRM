using API.Application.DTO;
using API.Application.Process.Commands.Create;
using AutoMapper;
using System;

namespace API.Application.Mappings
{
    public class ProcessProfile : Profile
    {
        public ProcessProfile()
        {
            CreateMap<Domain.Models.Process, ProcessDto>()
                .ForMember(x => x.ClientNumber, src => src.MapFrom(x => x.Client.Identifier))
                .ForMember(x => x.Name, src => src.MapFrom(x => string.IsNullOrEmpty(x.Client.CompanyName) ? $"{x.Client.Name}{x.Client.Surname}" : x.Client.CompanyName));

            CreateMap<CreateProcessCommand, Domain.Models.Process>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => Guid.NewGuid()))
                .ForMember(dest => dest.Status, src => src.MapFrom(x => "Nowe"));
        }
    }
}
