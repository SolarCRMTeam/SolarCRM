using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Infrastructure.Migrations
{
    public partial class Fillprocessmodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Advance",
                table: "Process",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "Application",
                table: "Process",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Assembly",
                table: "Process",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Audit",
                table: "Process",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "ClientId",
                table: "Process",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.AddColumn<DateTime>(
                name: "FinalBilling",
                table: "Process",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FinalInvoice",
                table: "Process",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Identifier",
                table: "Process",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<decimal>(
                name: "InstallationSize",
                table: "Process",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "Kind",
                table: "Process",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Meeting",
                table: "Process",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Process",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<decimal>(
                name: "OfferValue",
                table: "Process",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "OperatorRequest",
                table: "Process",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "ProjectAccepted",
                table: "Process",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Process",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "Updated",
                table: "Process",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Process_ClientId",
                table: "Process",
                column: "ClientId");

            migrationBuilder.AddForeignKey(
                name: "FK_Process_Clients_ClientId",
                table: "Process",
                column: "ClientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Process_Clients_ClientId",
                table: "Process");

            migrationBuilder.DropIndex(
                name: "IX_Process_ClientId",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Advance",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Application",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Assembly",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Audit",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "FinalBilling",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "FinalInvoice",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Identifier",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "InstallationSize",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Kind",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Meeting",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "OfferValue",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "OperatorRequest",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "ProjectAccepted",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "Updated",
                table: "Process");
        }
    }
}
