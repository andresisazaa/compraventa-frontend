import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutingModule } from './purchases.routes';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { PurchasesListComponent } from './components/purchases-list/purchases-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PurchasesComponent,
    PurchaseComponent,
    NewPurchaseComponent,
    PurchasesListComponent,
  ],
  imports: [CommonModule, PurchasesRoutingModule, ReactiveFormsModule, SharedModule],
})
export class PurchasesModule {}
