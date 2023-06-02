using System;
using System.Collections.Generic;

namespace HelpDesk_API;

public partial class User
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<BookMark> BookMarks { get; set; } = new List<BookMark>();

    public virtual ICollection<Ticket> TicketAuthorNavigations { get; set; } = new List<Ticket>();

    public virtual ICollection<Ticket> TicketWhoSolvedNavigations { get; set; } = new List<Ticket>();
}
