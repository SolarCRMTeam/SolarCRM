// <auto-generated />
using System;
using API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Infrastructure.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20220516073749_Changes in cols")]
    partial class Changesincols
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.11");

            modelBuilder.Entity("API.Domain.Models.Client", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Address")
                        .HasColumnType("longtext");

                    b.Property<int>("ClientType")
                        .HasColumnType("int");

                    b.Property<string>("Comments")
                        .HasColumnType("longtext");

                    b.Property<string>("CompanyName")
                        .HasColumnType("longtext");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("District")
                        .HasColumnType("longtext");

                    b.Property<string>("Identifier")
                        .HasColumnType("longtext");

                    b.Property<string>("Mail")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("longtext");

                    b.Property<string>("Place")
                        .HasColumnType("longtext");

                    b.Property<string>("PostalCode")
                        .HasColumnType("longtext");

                    b.Property<string>("Street")
                        .HasColumnType("longtext");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext");

                    b.Property<string>("Voivodeship")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("API.Domain.Models.Event", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<DateTime>("AdvanceDate")
                        .HasColumnType("datetime(6)");

                    b.Property<decimal>("AuditElectricBill")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("AuditOrientation")
                        .HasColumnType("int");

                    b.Property<int>("AuditPlace")
                        .HasColumnType("int");

                    b.Property<int>("AuditShading")
                        .HasColumnType("int");

                    b.Property<int>("AuditSurface")
                        .HasColumnType("int");

                    b.Property<int>("AuditWorkScope")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("EventType")
                        .HasColumnType("int");

                    b.Property<int>("Meeting")
                        .HasColumnType("int");

                    b.Property<DateTime?>("MeetingDate")
                        .HasColumnType("datetime(6)");

                    b.Property<Guid?>("ProcessId")
                        .HasColumnType("char(36)");

                    b.Property<string>("Warnings")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("ProcessId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("API.Domain.Models.Process", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<decimal?>("Advance")
                        .HasColumnType("decimal(65,30)");

                    b.Property<DateTime?>("Application")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("Audit")
                        .HasColumnType("int");

                    b.Property<Guid>("ClientId")
                        .HasColumnType("char(36)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime?>("FinalBilling")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("FinalInvoice")
                        .HasColumnType("longtext");

                    b.Property<string>("Identifier")
                        .HasColumnType("longtext");

                    b.Property<int?>("Installation")
                        .HasColumnType("int");

                    b.Property<decimal?>("InstallationSize")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("Kind")
                        .HasColumnType("int");

                    b.Property<int?>("Meeting")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<decimal?>("OfferValue")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int?>("OperatorRequest")
                        .HasColumnType("int");

                    b.Property<int?>("ProjectAccepted")
                        .HasColumnType("int");

                    b.Property<Guid>("RepresentativeId")
                        .HasColumnType("char(36)");

                    b.Property<string>("Status")
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("Updated")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("RepresentativeId");

                    b.ToTable("Process");
                });

            modelBuilder.Entity("API.Domain.Models.Representative", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Address")
                        .HasColumnType("longtext");

                    b.Property<string>("Comments")
                        .HasColumnType("longtext");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("District")
                        .HasColumnType("longtext");

                    b.Property<string>("Login")
                        .HasColumnType("longtext");

                    b.Property<string>("Mail")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("longtext");

                    b.Property<string>("Place")
                        .HasColumnType("longtext");

                    b.Property<string>("PostalCode")
                        .HasColumnType("longtext");

                    b.Property<string>("Street")
                        .HasColumnType("longtext");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext");

                    b.Property<string>("Voivodeship")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Representatives");
                });

            modelBuilder.Entity("API.Domain.Models.Event", b =>
                {
                    b.HasOne("API.Domain.Models.Process", "Process")
                        .WithMany("Events")
                        .HasForeignKey("ProcessId");

                    b.Navigation("Process");
                });

            modelBuilder.Entity("API.Domain.Models.Process", b =>
                {
                    b.HasOne("API.Domain.Models.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Domain.Models.Representative", "Representative")
                        .WithMany()
                        .HasForeignKey("RepresentativeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");

                    b.Navigation("Representative");
                });

            modelBuilder.Entity("API.Domain.Models.Process", b =>
                {
                    b.Navigation("Events");
                });
#pragma warning restore 612, 618
        }
    }
}
