import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: LoanTypesComponent },
  { path: 'leads',
    component: AddContactsComponent,
    children: [
      { path: '', component: AddLeadsComponent },
      { path: 'user', component: UsersComponent },
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
