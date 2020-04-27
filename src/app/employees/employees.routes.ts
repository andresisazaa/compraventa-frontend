import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeeMenuComponent } from './components/employee-menu/employee-menu.component';


const routes: Routes = [
  {
    path: '', component: EmployeesComponent, children:
      [
        { path: 'list', component: EmployeeComponent },
        { path: 'new', component: NewEmployeeComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
