import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Tickets, BookMark } from './user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

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
}
