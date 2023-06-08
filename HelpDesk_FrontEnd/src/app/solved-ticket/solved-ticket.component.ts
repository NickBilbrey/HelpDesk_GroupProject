import { Component } from '@angular/core';
import { Tickets, User } from '../user';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-solved-ticket',
  templateUrl: './solved-ticket.component.html',
  styleUrls: ['./solved-ticket.component.css']
})
export class SolvedTicketComponent {

  currentUser?: User
  ticketToSolve? : Tickets
  solutionBody? : any

  constructor(private ticketService: TicketService) {
    this.currentUser = this.ticketService.currentUser;
    this.ticketToSolve = this.ticketService.currentTicket;
  }

  solveTicket(solvedTicketBody: string) {
    if (this.ticketToSolve && this.ticketToSolve.solution) {
      this.ticketToSolve.solution = solvedTicketBody;
    }
  }

}
