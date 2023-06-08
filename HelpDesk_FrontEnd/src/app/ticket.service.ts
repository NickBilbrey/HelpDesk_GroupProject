import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Tickets, BookMark } from './user';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  currentUser?: User;
  currentTicket?: Tickets;
  favorites: Tickets[] = [];

  constructor(private http: HttpClient) { }

  private url: string = 'https://localhost:7233'

  getTickets(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(this.url + '/api/Tickets');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/api/Users')
  }

  getBookMarks(): Observable<BookMark[]> {
    return this.http.get<BookMark[]>(this.url + '/api/BookMarks')
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.url + '/api/Users/' + userId)
  }

  addUser(firstName: string, email: string): Observable<User> {
    const user: User = { firstName, email }; // Create the user object without iD because it auto increments
    return this.http.post<User>(this.url + '/api/Users', user);
  }

  createTicket(newTicket: Tickets): Observable<Tickets> {
    return this.http.post<Tickets>(this.url + '/api/Tickets', newTicket);
  }
  
  saveSolvedTicket(solvedTicket: Tickets, oldTicketID: any): Observable<Tickets> {
    oldTicketID = this.currentTicket?.ticketId;
    return this.http.put<Tickets>(this.url + `/api/Tickets/${oldTicketID}`, solvedTicket )
  }
}
