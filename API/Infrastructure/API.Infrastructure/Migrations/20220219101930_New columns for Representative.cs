using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Infrastructure.Migrations
{
    public partial class NewcolumnsforRepresentative : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "District",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Mail",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "PostalCode",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Voivodeship",
                table: "Representatives",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comments",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "District",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "Mail",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "Place",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "PostalCode",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "Surname",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "Voivodeship",
                table: "Representatives");
        }
    }
}
