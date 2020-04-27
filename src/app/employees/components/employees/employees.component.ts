import { Component, OnInit } from '@angular/core';
import { EmployeesService} from 'src/app/shared/services/employees.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees = [];
  loadingEmployees: boolean;
  constructor(
    private employeesService : EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    this.loadingEmployees = true;
    this.employeesService.getEmployees().subscribe((employees)=> {
      this.employees = employees;
      this.loadingEmployees = false;
    });
  }

  viewEmployeeDetails(id: number){
    this.router.navigate([id], { relativeTo: this.route});
  }
}
