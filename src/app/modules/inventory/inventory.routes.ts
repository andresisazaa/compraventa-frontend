import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { NewMachineComponent } from './components/machines/new-machine/new-machine.component';
import { MachineComponent } from './components/machines/machine/machine.component';
import { ModelsComponent } from './components/models/models.component';
import { ModelComponent } from './components/models/model/model.component';
import { NewModelComponent } from './components/models/new-model/new-model.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { NewBrandComponent } from './components/brands/new-brand/new-brand.component';
import { MachinesListComponent } from './components/machines/machines-list/machines-list.component';
import { ModelsListComponent } from './components/models/models-list/models-list.component';
import { BrandsListComponent } from './components/brands/brands-list/brands-list.component';
import { InventoryMenuComponent } from './components/inventory/inventory-menu/inventory-menu.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: '',
        component: InventoryMenuComponent,
      },
      {
        path: 'maquinas',
        component: MachinesComponent,
        children: [
          { path: '', component: MachinesListComponent },
          { path: 'new', component: NewMachineComponent },
          { path: ':id', component: MachineComponent },
        ],
      },
      {
        path: 'modelos',
        component: ModelsComponent,
        children: [
          { path: '', component: ModelsListComponent },
          { path: 'new', component: NewModelComponent },
          { path: ':id', component: ModelComponent },
        ],
      },
      {
        path: 'marcas',
        component: BrandsComponent,
        children: [
          { path: '', component: BrandsListComponent },
          { path: 'new', component: NewBrandComponent },
          { path: ':id', component: BrandComponent },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/inventory' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
