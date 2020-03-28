import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NewProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
