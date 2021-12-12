using API.Application.DTO;
using AutoMapper;

namespace API.Application.Mappings
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Domain.Models.Client, ClientDto>();
        }
    }
}
