import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderComponent } from './components/provider/provider.component';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { ProvidersRoutingModule } from './providers.routes';



@NgModule({
  declarations: [ProvidersComponent, ProviderListComponent, ProviderComponent, NewProviderComponent, ProviderFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProvidersRoutingModule,
    SharedModule
  ]
})
export class ProvidersModule { }
