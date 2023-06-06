import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { SolvedTicketComponent } from './solved-ticket/solved-ticket.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelpDeskComponent,
    BookmarksComponent,
    BookmarkFormComponent,
    SolvedTicketComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
