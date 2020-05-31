import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'inventario',
        loadChildren: () =>
          import('./modules/inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'empleados',
        loadChildren: () =>
          import('./modules/employees/employees.module').then((m) => m.EmployeesModule),
      },
      {
        path: 'ventas',
        loadChildren: () =>
          import('./modules/sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'compras',
        loadChildren: () =>
          import('./modules/purchases/purchases.module').then((m) => m.PurchasesModule),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'proveedores',
        loadChildren: () =>
          import('./modules/providers/providers.module').then((m) => m.ProvidersModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
