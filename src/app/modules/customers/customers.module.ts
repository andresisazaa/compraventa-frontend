import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { NewCustomerComponent } from './components/customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './components/customers/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers.routes';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    NewCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
