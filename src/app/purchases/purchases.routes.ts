import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { PurchasesListComponent } from './components/purchases-list/purchases-list.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent,
    children: [
      { path: '', component: PurchasesListComponent },
      { path: 'new', component: NewPurchaseComponent },
      { path: ':id', component: PurchaseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule {}
