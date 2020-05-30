import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { NewCustomerComponent } from './components/customers/new-customer/new-customer.component';
import { CustomerComponent } from './components/customers/customer/customer.component';


const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: '', component: CustomerListComponent },
      { path: 'new', component: NewCustomerComponent },
      { path: ':id', component: CustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
