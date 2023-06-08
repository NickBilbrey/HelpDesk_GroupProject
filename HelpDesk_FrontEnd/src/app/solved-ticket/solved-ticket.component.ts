import { Component } from '@angular/core';
import { Tickets, User } from '../user';
import { TicketService } from '../ticket.service';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solved-ticket',
  templateUrl: './solved-ticket.component.html',
  styleUrls: ['./solved-ticket.component.css']
})
export class SolvedTicketComponent {

  currentUser?: User
  ticketToSolve? : Tickets
  solutionBody? : any

  constructor(private ticketService: TicketService, private router: Router ) {
    this.currentUser = this.ticketService.currentUser;
    this.ticketToSolve = this.ticketService.currentTicket;
  }

  solveTicket(solvedTicketBody: string) {
    if (this.ticketToSolve) {
      this.ticketToSolve.solution = solvedTicketBody;
      this.ticketToSolve.solved = true;
      this.ticketToSolve.whoSolved = this.currentUser?.id?? null;
      this.ticketService.saveSolvedTicket( this.ticketToSolve, this.ticketToSolve.ticketId).subscribe(result => console.log(result));
      console.log(this.ticketToSolve);
      this.router.navigate(['/help-desk']);
    }

  }
  

}
