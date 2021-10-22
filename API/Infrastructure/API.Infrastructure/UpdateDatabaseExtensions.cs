using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace API.Infrastructure
{
    public static class UpdateDatabaseExtensions
    {
        public static void UpdateDatabase<TDbContext>(this IApplicationBuilder app) where TDbContext : DbContext
        {
            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            using var context = serviceScope.ServiceProvider.GetService<TDbContext>();
            context.Database.Migrate();
        }

        public static void InitializeDatabase<TInitializer>(this IApplicationBuilder app) where TInitializer : IDatabaseInitializer
        {
            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var initializer = serviceScope.ServiceProvider.GetService<TInitializer>();
            initializer.SeedData().Wait();
        }
    }

    public interface IDatabaseInitializer
    {
        Task SeedData();
    }
}
