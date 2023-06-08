using System;
using System.Collections.Generic;

namespace HelpDesk_API;

public partial class Ticket
{
    public int? TicketId { get; set; }

    public int? Author { get; set; }

    public string? Body { get; set; }

    public bool? Solved { get; set; }

    public bool? Bookmarked { get; set; }

    public string? Solution { get; set; }

    public int? WhoSolved { get; set; }

    public virtual User? AuthorNavigation { get; set; }

    public virtual User? WhoSolvedNavigation { get; set; }
}
