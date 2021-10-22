using API.Infrastructure.Installers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Linq;
using System.Reflection;

namespace API.Installers
{
    public static class ExtensionsInstaller
    {
        public static void InstallServicesInAssembly(this IServiceCollection services, IConfiguration configuration, IHostEnvironment hostingEnvironment, Assembly assembly)
        {
            if (assembly == null) return;
            var installers = assembly.ExportedTypes.Where(x =>
                typeof(IInstaller).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract).Select(Activator.CreateInstance).Cast<IInstaller>().ToList();

            installers.ForEach(installer => installer.InstallServices(services, configuration, hostingEnvironment));
        }


    }
}
