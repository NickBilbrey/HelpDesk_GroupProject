import { Component} from '@angular/core';
import { TicketService } from '../ticket.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private ticketService: TicketService){}

  loginUser(firstName: string, email: string): void {
    this.ticketService.getUsers().subscribe({
      next: (users: User[]) => {
        const user = users.find(u => u.firstName === firstName && u.email === email);
        if (user) {
          this.ticketService.currentUser = user; // Assign currentUser value
          console.log('User logged in:', user);
          this.router.navigate(['/helpDesk']); // Route to the HelpDeskComponent
        } else {
          this.ticketService.addUser(firstName, email).subscribe({
            next: (createdUser: User) => {
              this.ticketService.currentUser = createdUser;
              console.log('New user created:', createdUser);
              this.router.navigate(['/helpDesk']); // Route to the HelpDeskComponent
            },
            error: (error: any) => {
              console.log('Error creating user:', error);
            }
          });
        }
      },
      error: (error: any) => {
        console.log('Error retrieving users:', error);
      }
    });
  }

}
