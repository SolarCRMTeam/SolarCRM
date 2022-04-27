using API.Application.DTO;
using AutoMapper;

namespace API.Application.Mappings
{
    public class ProcessProfile : Profile
    {
        public ProcessProfile()
        {
            CreateMap<Domain.Models.Process, ProcessDto>();
        }
    }
}
