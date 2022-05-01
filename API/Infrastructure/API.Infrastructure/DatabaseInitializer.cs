using API.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace API.Infrastructure
{
    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly DatabaseContext _context;
        public DatabaseInitializer(DatabaseContext databaseContext)
        {
            _context = databaseContext;
        }
        public async Task SeedData()
        {
            var adminRepresentative = new Representative
            {
                Id = new Guid("70266205-71a7-4aa2-96b0-b95133534a41"),
                Name = "Admin",
                Login = "admin",
                Password = "admin",
            };

            var adminExists = await _context.Representatives.FirstOrDefaultAsync(x => x.Id == adminRepresentative.Id);

            if (adminExists != null)
                return;

            _context.Representatives.Add(adminRepresentative);
            await _context.SaveChangesAsync();
            return;
        }
    }
}
