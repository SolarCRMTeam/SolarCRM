using API.Framework.Context;
using API.Framework.EventBus;
using API.Infrastructure;
using API.Infrastructure.Middleware;
using API.Infrastructure.Services;
using API.Installers;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Sieve.Services;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Reflection;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment Environment { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1.0", new OpenApiInfo { Title = "API", Version = "v1.0" });
                c.CustomOperationIds(apiDesc => apiDesc.TryGetMethodInfo(out MethodInfo methodInfo) ? methodInfo.Name : null);
                c.MapType<IFormFile>(() => new OpenApiSchema() { Type = "file", Format = "binary" });
            });
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.InstallServicesInAssembly(Configuration, Environment, typeof(Startup).Assembly);
            services.InstallServicesInAssembly(Configuration, Environment, typeof(DatabaseContext).Assembly);
            services.AddScoped<SieveProcessor>();
            services.AddScoped<IUserService, UserService>();

            var domainAssemblies = AppDomain.CurrentDomain.GetAssemblies();
            services.AddMediatR(domainAssemblies);
            services.AddScoped<IInternalBus, InMemoryBus>();
            services.AddScoped<RequestContext, RequestContext>();
            services.AddTransient<DatabaseInitializer>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("v1.0/swagger.json", "API v1"));

            }

            app.UseRouting();

            //app.UseAuthorization();

            

            app.UseCors(x => x
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());

            app.UseMiddleware<BasicAuthMiddleware>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UpdateDatabase<DatabaseContext>();
            app.InitializeDatabase<DatabaseInitializer>();
        }
    }
}
