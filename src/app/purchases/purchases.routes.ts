import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent,
    children: [
      { path: 'list', component: PurchaseComponent },
      { path: 'new', component: NewPurchaseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule {}
