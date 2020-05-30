import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machines/machine/machine.component';
import { NewMachineComponent } from './components/machines/new-machine/new-machine.component';
import { InventoryRoutingModule } from './inventory.routes';
import { ModelsComponent } from './components/models/models.component';
import { NewModelComponent } from './components/models/new-model/new-model.component';
import { ModelComponent } from './components/models/model/model.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { NewBrandComponent } from './components/brands/new-brand/new-brand.component';
import { BrandsListComponent } from './components/brands/brands-list/brands-list.component';
import { ModelsListComponent } from './components/models/models-list/models-list.component';
import { MachinesListComponent } from './components/machines/machines-list/machines-list.component';
import { InventoryMenuComponent } from './components/inventory/inventory-menu/inventory-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule
  ],
})
export class InventoryModule {}
