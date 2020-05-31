import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  employees = [];
  loadingEmployees: boolean;
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.loadingEmployees = true;
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.loadingEmployees = false;
    });
  }

  viewEmployeeDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
