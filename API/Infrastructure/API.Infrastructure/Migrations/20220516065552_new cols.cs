using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Infrastructure.Migrations
{
    public partial class newcols : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Assembly",
                table: "Process");

            migrationBuilder.AddColumn<int>(
                name: "Installation",
                table: "Process",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Installation",
                table: "Process");

            migrationBuilder.AddColumn<bool>(
                name: "Assembly",
                table: "Process",
                type: "tinyint(1)",
                nullable: true);
        }
    }
}
