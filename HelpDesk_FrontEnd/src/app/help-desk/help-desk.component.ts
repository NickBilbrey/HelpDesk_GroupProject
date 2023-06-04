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

  user?: User;
  tickets: Tickets[] = [];

  ngOnInit(): void{
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketService.getTickets().subscribe(result => console.log(result));
  }

}
