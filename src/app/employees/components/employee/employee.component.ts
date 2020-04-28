import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PointsOfSaleService } from 'src/app/shared/services/points-of-sale.service';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { Job } from 'src/app/shared/models/job.model';
import { PointOfSale } from 'src/app/shared/models/pointOfSale.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  jobs: Job[] = [];
  pointsOfSale: PointOfSale[] = [];
  employee: any;
  constructor(
    private route: ActivatedRoute,
    private emplyeesService: EmployeesService,
    private fb: FormBuilder,
    private pointsOfSaleService: PointsOfSaleService,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      const id = Number(params.id);
      forkJoin([this.getPointsOfSale(), this.getJobs()]).subscribe(()=>{})
      this.emplyeesService.getEmployeeById(id).subscribe((employee) =>{
        this.employee = employee;
        console.log(this.employee)
        this.employeeForm = this.createEmployeeForm();
      });
    });    
  }

  createEmployeeForm(): FormGroup {
    return this.fb.group({
      name: [this.employee.name, [Validators.required, Validators.maxLength(50)]],
      document: [this.employee.document, [Validators.required, Validators.maxLength(10)]],
      phone: [this.employee.phone, Validators.maxLength(10)],
      address: [this.employee.address, Validators.maxLength(60)],
      email: [this.employee.email, [Validators.email, Validators.maxLength(50)]],
      jobId: [this.employee.jobId, Validators.required],
      posId: [this.employee.posId, Validators.required],
    });
  }

  getJobs(): void {
    this.jobsService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  getPointsOfSale(): void {
    this.pointsOfSaleService.getPointsOfSale().subscribe((pointsOfSale) => {
      this.pointsOfSale = pointsOfSale;
    });
  }

  onSubmit() {
    console.log(this.employeeForm.value);
  }

}
