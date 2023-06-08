import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Tickets, User, BookMark } from '../user';
import { FormsModule } from '@angular/forms';
import { HelpDeskComponent } from '../help-desk/help-desk.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  currentUser?: User;
  allTickets: Tickets[] = [];
  userTickets: Tickets[] = [];

  constructor(private router: Router, private ticketService: TicketService ) {
    this.currentUser = ticketService.currentUser;
    this.userTickets = ticketService.favorites;
   }
  ngOnInit() {
    this.ticketService.getTickets().subscribe(result => this.allTickets = result);
  }

  
}