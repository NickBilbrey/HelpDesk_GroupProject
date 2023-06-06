import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { User } from '../user';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css']
})
export class BookmarkFormComponent {

  currentUser?: User;

  constructor(private ticketService: TicketService) {
    this.currentUser = this.ticketService.currentUser;
  }

}
