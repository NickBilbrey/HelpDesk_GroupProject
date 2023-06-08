using System;
using System.Collections.Generic;

namespace HelpDesk_API;

public partial class BookMark
{
    public int? BookMarkId { get; set; }

    public int? UserId { get; set; }

    public virtual User? User { get; set; }
}
