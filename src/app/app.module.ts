import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactsComponent,
    AddLeadsComponent,
    HighlightDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
