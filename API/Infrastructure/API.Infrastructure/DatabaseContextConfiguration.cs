using API.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure
{
    public partial class DatabaseContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Process>()
                .HasOne(process => process.Client);
        }
    }
}