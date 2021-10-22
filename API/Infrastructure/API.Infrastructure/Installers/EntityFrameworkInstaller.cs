using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

namespace API.Infrastructure.Installers
{
    public class EntityFrameworkInstaller : IInstaller
    {
        public void InstallServices(
            IServiceCollection services,
            IConfiguration configuration,
            IHostEnvironment hostingEnvironment
            )
        {
            var connectionString = configuration["Database:ConnectionString"];
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 26));

            services.AddDbContext<DatabaseContext>(options => options
                .UseMySql(connectionString, serverVersion)
                .LogTo(Console.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging()
                .EnableDetailedErrors()
            );
        }
    }
}
