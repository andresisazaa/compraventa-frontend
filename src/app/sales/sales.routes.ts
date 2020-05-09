import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesComponent } from './components/sales/sales.component';
import { SaleComponent } from './components/sale/sale.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';


const routes: Routes = [
  {
    path: '', component: SalesComponent, children: [
      { path: 'id', component: SaleComponent },
      { path: 'new', component: NewSaleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
