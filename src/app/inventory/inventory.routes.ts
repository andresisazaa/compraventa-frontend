import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MachinesComponent } from './components/machines/machines.component';
import { NewMachineComponent } from './components/new-machine/new-machine.component';
import { MachineComponent } from './components/machine/machine.component';

const routes: Routes = [
  {
    path: '', component: InventoryComponent, children:
      [
        { path: 'machines', component: MachinesComponent },
        { path: 'new', component: NewMachineComponent },
        { path: 'id', component: MachineComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
