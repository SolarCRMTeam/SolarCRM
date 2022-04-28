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
            CreateMap<Domain.Models.Process, ProcessDto>();

            CreateMap<CreateProcessCommand, Domain.Models.Process>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => Guid.NewGuid()));
        }
    }
}
