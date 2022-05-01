using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Infrastructure.Migrations
{
    public partial class Addrepresentativeandprocessrelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "RepresentativeId",
                table: "Process",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                collation: "ascii_general_ci");

            migrationBuilder.CreateIndex(
                name: "IX_Process_RepresentativeId",
                table: "Process",
                column: "RepresentativeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Process_Representatives_RepresentativeId",
                table: "Process",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Process_Representatives_RepresentativeId",
                table: "Process");

            migrationBuilder.DropIndex(
                name: "IX_Process_RepresentativeId",
                table: "Process");

            migrationBuilder.DropColumn(
                name: "RepresentativeId",
                table: "Process");
        }
    }
}
