import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      { path: '', component: EmployeesListComponent },
      { path: 'new', component: NewEmployeeComponent },
      { path: ':id', component: EmployeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
