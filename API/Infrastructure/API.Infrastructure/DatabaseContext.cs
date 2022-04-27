using API.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Representative> Representatives { get; set; }
        public DbSet<Process> Process { get; set; }
    }
}
