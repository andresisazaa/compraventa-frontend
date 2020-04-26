import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutingModule } from './purchases.routes';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderComponent } from './components/provider/provider.component';
import { NewProviderComponent } from './components/new-provider/new-provider.component';

@NgModule({
  declarations: [
    PurchasesComponent,
    PurchaseComponent,
    NewPurchaseComponent,
    ProvidersComponent,
    ProviderComponent,
    NewProviderComponent,
  ],
  imports: [CommonModule, PurchasesRoutingModule],
})
export class PurchasesModule {}
