using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk_API;

public partial class HelpDeskContext : DbContext
{
    public HelpDeskContext()
    {
    }

    public HelpDeskContext(DbContextOptions<HelpDeskContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BookMark> BookMarks { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=HelpDesk;Integrated Security=SSPI;trust Server Certificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BookMark>(entity =>
        {
            entity.HasKey(e => e.BookMarkId).HasName("PK__BookMark__C5CA622C68768F1E");

            entity.ToTable("BookMark");

            entity.Property(e => e.BookMarkId).HasColumnName("BookMarkID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.BookMarks)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__BookMark__UserID__3D5E1FD2");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.TicketId).HasName("PK__Tickets__712CC627880C7984");

            entity.Property(e => e.TicketId).HasColumnName("TicketID");
            entity.Property(e => e.Body).IsUnicode(false);
            entity.Property(e => e.Solution).IsUnicode(false);

            entity.HasOne(d => d.AuthorNavigation).WithMany(p => p.TicketAuthorNavigations)
                .HasForeignKey(d => d.Author)
                .HasConstraintName("FK__Tickets__Author__398D8EEE");

            entity.HasOne(d => d.WhoSolvedNavigation).WithMany(p => p.TicketWhoSolvedNavigations)
                .HasForeignKey(d => d.WhoSolved)
                .HasConstraintName("FK__Tickets__WhoSolv__3A81B327");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC271B3B1AB0");

            entity.ToTable("User");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
