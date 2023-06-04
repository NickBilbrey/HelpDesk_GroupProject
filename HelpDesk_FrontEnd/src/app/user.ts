export interface User {
    ID: number;
    FirstName: string;
    Email: string;
}

export interface Tickets {
    TicketID: number;
    Author: number;
    Body: string;
    Solved: boolean;
    Bookmarked: boolean;
    Solution: string | null;
    WhoSolved: number | null;
  }

export interface BookMark {
    BookMarkID: number;
    UserID: number;
  }
