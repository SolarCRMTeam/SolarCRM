using API.Contract;
using API.Infrastructure.Database.Client;
using API.Infrastructure.Database.Event;
using API.Infrastructure.Database.Process;
using API.Infrastructure.Database.Representative;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API.Infrastructure.Installers
{
    public class RepositoryInstaller : IInstaller
    {

        public void InstallServices(IServiceCollection services, Microsoft.Extensions.Configuration.IConfiguration configuration, IHostEnvironment hostingEnvironment)
        {
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IRepresentativeRepository, RepresentativeRepository>();
            services.AddScoped<IProcessRepository, ProcessRepository>();
            services.AddScoped<IEventRepository, EventRepository>();
        }
    }
}
