import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';
import { NewMachineComponent } from './components/new-machine/new-machine.component';
import { InventoryRoutingModule } from './inventory.routes';


@NgModule({
  declarations: [
    InventoryComponent,
    MachinesComponent,
    MachineComponent,
    NewMachineComponent
  ],
  imports: [
    CommonModule, InventoryRoutingModule
  ]
})
export class InventoryModule { }
