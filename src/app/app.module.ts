import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SalesComponent } from './components/sales/sales/sales.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import { NewSaleComponent } from './components/sales/new-sale/new-sale.component';
import { PurchasesComponent } from './components/purchases/purchases/purchases.component';
import { PurchaseComponent } from './components/purchases/purchase/purchase.component';
import { NewPurchaseComponent } from './components/purchases/new-purchase/new-purchase.component';
import { EmployeesComponent } from './components/employees/employees/employees.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { ProvidersComponent } from './components/providers/providers/providers.component';
import { ProviderComponent } from './components/providers/provider/provider.component';
import { NewProviderComponent } from './components/providers/new-provider/new-provider.component';
import { MachinesComponent } from './components/machines/machines/machines.component';
import { MachineComponent } from './components/machines/machine/machine.component';
import { NewMachineComponent } from './components/machines/new-machine/new-machine.component';
import { CustomersComponent } from './components/customers/customers/customers.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { NewCustomerComponent } from './components/customers/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    SaleComponent,
    NewSaleComponent,
    PurchasesComponent,
    PurchaseComponent,
    NewPurchaseComponent,
    EmployeesComponent,
    EmployeeComponent,
    NewEmployeeComponent,
    ProvidersComponent,
    ProviderComponent,
    NewProviderComponent,
    MachinesComponent,
    MachineComponent,
    NewMachineComponent,
    CustomersComponent,
    CustomerComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
