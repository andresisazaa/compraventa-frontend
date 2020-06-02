import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesRoutingModule } from './employees.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    NewEmployeeComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class EmployeesModule { }
