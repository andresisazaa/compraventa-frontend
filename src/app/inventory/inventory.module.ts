import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';
import { NewMachineComponent } from './components/new-machine/new-machine.component';
import { InventoryRoutingModule } from './inventory.routes';
import { ModelsComponent } from './components/models/models.component';
import { NewModelComponent } from './components/new-model/new-model.component';
import { ModelComponent } from './components/model/model.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandComponent } from './components/brand/brand.component';
import { NewBrandComponent } from './components/new-brand/new-brand.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { InventoryMenuComponent } from './components/inventory-menu/inventory-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InventoryComponent,
    MachinesComponent,
    MachineComponent,
    NewMachineComponent,
    ModelsComponent,
    NewModelComponent,
    ModelComponent,
    BrandsComponent,
    BrandComponent,
    NewBrandComponent,
    BrandsListComponent,
    ModelsListComponent,
    MachinesListComponent,
    InventoryMenuComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class InventoryModule {}
