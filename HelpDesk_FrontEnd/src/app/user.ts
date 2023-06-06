export interface User {
    iD: number;
    firstName: string;
    email: string;
}

export interface Tickets {
    ticketId: number;
    author: number;
    body: string;
    solved: boolean;
    bookmarked: boolean;
    solution: string | null;
    whoSolved: number | null;
    expanded?: boolean;
  }

export interface BookMark {
    bookMarkId: number;
    userId: number;
  }
