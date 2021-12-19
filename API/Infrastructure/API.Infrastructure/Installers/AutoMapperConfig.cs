using API.Application.Mappings;
using System.Reflection;

namespace API.Infrastructure.Installers
{
    public class AutoMapperConfig
    {
        public static Assembly[] GetAssemblies()
        => new Assembly[]
        {
                    typeof(AutoMapperConfig).Assembly,
                    typeof(ClientProfile).Assembly,
                    typeof(RepresentativeProfile).Assembly,
        };
    }
}
