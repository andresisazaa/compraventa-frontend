import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { NewMachineComponent } from './components/new-machine/new-machine.component';
import { MachineComponent } from './components/machine/machine.component';
import { ModelsComponent } from './components/models/models.component';
import { ModelComponent } from './components/model/model.component';
import { NewModelComponent } from './components/new-model/new-model.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandComponent } from './components/brand/brand.component';
import { NewBrandComponent } from './components/new-brand/new-brand.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { InventoryMenuComponent } from './components/inventory-menu/inventory-menu.component';

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
export class InventoryRoutingModule {}
