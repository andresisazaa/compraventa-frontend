import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { ProviderComponent } from './components/provider/provider.component';


const routes: Routes = [
  {
    path: '', component: ProvidersComponent,
    children: [
      { path: '', component: ProviderListComponent },
      { path: 'new', component: NewProviderComponent },
      { path: ':id', component: ProviderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }