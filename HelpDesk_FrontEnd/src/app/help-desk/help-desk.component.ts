import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Tickets, User, BookMark } from '../user';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  currentUser?: User

  constructor(private ticketService: TicketService, private http: HttpClient, private router: Router){
    
  }
  user: User[] = [];
  tickets: Tickets[] = [];
  bookMark: BookMark[] = [];
  
  ngOnInit(): void{
    this.getAllTickets();
    this.getAllUsers();
    this.getAllBookMarks();
    this.currentUser = this.ticketService.currentUser;
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
  goToBookmark(bookmark: Tickets) {
    this.ticketService.favorites.push(bookmark)
    this.router.navigate(['/bookmarks']); // Update '/bookmark' with the actual route of the bookmark component
  }
  goToSolvedTicket(ticketToSolve : Tickets) {
    this.ticketService.currentTicket = ticketToSolve;
    this.router.navigate(['/solved-ticket']); // Update '/solved-ticket' with the actual route of the solved-ticket component
  }
  // Define a newTicket object to hold the values of the new ticket form
    newTicket: Tickets = {
    author: -1,
    body: '',
    solved: false,
    bookmarked: false,
    solution: null,
    whoSolved: null
  };
  createTicket(authoriD: any) {
    this.newTicket.author = authoriD;
    console.log(this.newTicket, "From Create Ticket")
    this.ticketService.createTicket(this.newTicket).subscribe(
      (response: Tickets) => {
        // Handle successful response if needed
        console.log('Ticket created successfully!');
      }
    );
  }
}










