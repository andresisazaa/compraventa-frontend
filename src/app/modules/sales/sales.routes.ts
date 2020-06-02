import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesComponent } from './components/sales/sales.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import { NewSaleComponent } from './components/sales/new-sale/new-sale.component';
import { SaleListComponent } from './components/sales/sale-list/sale-list.component';


const routes: Routes = [
  {
    path: '', component: SalesComponent,
    children: [
      { path: '', component: SaleListComponent },
      { path: 'new', component: NewSaleComponent },
      { path: ':id', component: SaleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
