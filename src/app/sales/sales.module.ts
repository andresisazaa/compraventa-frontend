import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales.routes';
import { SalesComponent } from './components/sales/sales.component';
import { SaleComponent } from './components/sale/sale.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';

@NgModule({
  declarations: [
    SalesComponent,
    SaleComponent,
    NewSaleComponent,
    CustomersComponent,
    CustomerComponent,
    NewCustomerComponent,
  ],
  imports: [CommonModule, SalesRoutingModule],
})
export class SalesModule {}
