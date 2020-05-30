import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales.routes';
import { ReactiveFormsModule } from '@angular/forms';

import { SalesComponent } from './components/sales/sales.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import { NewSaleComponent } from './components/sales/new-sale/new-sale.component';
import { SaleListComponent } from './components/sales/sale-list/sale-list.component';

@NgModule({
  declarations: [
    SalesComponent,
    SaleComponent,
    NewSaleComponent,
    SaleListComponent
  ],
  imports: [CommonModule, SalesRoutingModule, ReactiveFormsModule],
})
export class SalesModule { }
