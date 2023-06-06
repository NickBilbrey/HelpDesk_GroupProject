import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Tickets, User, BookMark } from '../user';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  constructor(private ticketService: TicketService){}

  user: User[] = [];
  tickets: Tickets[] = [];
  bookMark: BookMark[] = [];

  ngOnInit(): void{
    this.getAllTickets();
    this.getAllUsers();
    this.getAllBookMarks();
  }

  getAllTickets() {
    this.ticketService.getTickets().subscribe(result => {
      this.tickets = result.map(ticket => ({
        ...ticket,
        expanded: false // Add the 'expanded' property to each ticket object
      }));
      console.log(this.tickets);
    });
  }

  getAllUsers() {
    this.ticketService.getUsers().subscribe(result => {
      this.user = result;
      console.log(this.user)
    })
  }

  getAllBookMarks() {
    this.ticketService.getBookMarks().subscribe(result => {
      this.bookMark = result;
      console.log(this.bookMark)
    })
  }
  /* toggleTicket(ticket: any) {
    ticket.expanded = !ticket.expanded;
  } */
}
