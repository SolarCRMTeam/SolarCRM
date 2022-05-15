using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Infrastructure.Migrations
{
    public partial class newfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "AuditElectricBill",
                table: "Events",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "AuditOrientation",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AuditPlace",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AuditShading",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AuditSurface",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AuditWorkScope",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Warnings",
                table: "Events",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AuditElectricBill",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "AuditOrientation",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "AuditPlace",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "AuditShading",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "AuditSurface",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "AuditWorkScope",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Warnings",
                table: "Events");
        }
    }
}
