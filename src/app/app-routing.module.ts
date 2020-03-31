import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SalesComponent } from './components/sales/sales/sales.component';
import { PurchasesComponent } from './components/purchases/purchases/purchases.component';
import { EmployeesComponent } from './components/employees/employees/employees.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'ventas', component: SalesComponent },
      { path: 'compras', component: PurchasesComponent },
      { path: 'empleados', component: EmployeesComponent }]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
