import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
import { HomeComponent } from './components/shared/home/home.component';
import { AuthInterceptorService } from './services/auth/auth-interceptor.service';
import { NavComponent } from './components/shared/nav/nav.component';

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
    NewCustomerComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
