using API.Infrastructure.Installers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace API.Installers
{
    public class AutoMapperInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, Microsoft.Extensions.Configuration.IConfiguration configuration, IHostEnvironment hostingEnvironment)
        {
            var assemblies = new List<Assembly>(AppDomain.CurrentDomain.GetAssemblies());
            assemblies.AddRange(AutoMapperConfig.GetAssemblies());
            services.AddAutoMapper(assemblies);
        }
    }
}
