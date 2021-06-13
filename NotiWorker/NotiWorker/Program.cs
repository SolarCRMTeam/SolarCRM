using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NotiWorker.Models;

namespace NotiWorker
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureServices((hostContext, services) =>
                {
                    IConfiguration configuration = hostContext.Configuration;

                    BusConfig busConfig = configuration.GetSection("BusConfig").Get<BusConfig>();

                    services.AddSingleton(busConfig);
                    services.AddHostedService<Worker>();
                });
    }
}
