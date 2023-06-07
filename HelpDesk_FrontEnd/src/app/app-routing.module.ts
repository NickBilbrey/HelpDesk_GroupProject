import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { LoginComponent } from './login/login.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';

const routes: Routes = [
  {path: 'helpDesk', component: HelpDeskComponent},
  {path: 'login', component:LoginComponent},
  {path: 'bookMarkForm', component: BookmarkFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
