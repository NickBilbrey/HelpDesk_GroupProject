import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { LoginComponent } from './login/login.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { SolvedTicketComponent } from './solved-ticket/solved-ticket.component';

const routes: Routes = [
  {path: 'helpDesk', component: HelpDeskComponent},
  {path: 'login', component:LoginComponent},
  {path: 'bookMarkForm', component: BookmarkFormComponent},
  {path: 'solved-ticket', component: SolvedTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
