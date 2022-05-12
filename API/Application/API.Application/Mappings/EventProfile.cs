using API.Application.DTO;
using API.Application.Event.Commands.Create;
using AutoMapper;
using System;

namespace API.Application.Mappings
{
    public class EventProfile : Profile
    {
        public EventProfile()
        {
            CreateMap<Domain.Models.Event, EventDto>();

            CreateMap<CreateEventCommand, Domain.Models.Event>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => Guid.NewGuid()));
        }
    }
}
