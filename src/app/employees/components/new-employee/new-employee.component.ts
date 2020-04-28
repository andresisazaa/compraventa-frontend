import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PointsOfSaleService } from 'src/app/shared/services/points-of-sale.service';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { Job } from 'src/app/shared/models/job.model';
import { PointOfSale } from 'src/app/shared/models/pointOfSale.model';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss'],
})
export class NewEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  jobs: Job[] = [];
  pointsOfSale: PointOfSale[] = [];
  constructor(
    private employeesService: EmployeesService,
    private fb: FormBuilder,
    private location: Location,
    private pointsOfSaleService: PointsOfSaleService,
    private jobsService: JobsService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.createEmployeeForm();
    this.getPointsOfSale();
    this.getJobs();
  }

  createEmployeeForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      document: [null, [Validators.required, Validators.maxLength(10)]],
      phone: [null, Validators.maxLength(10)],
      address: [null, Validators.maxLength(60)],
      email: [null, [Validators.email, Validators.maxLength(50)]],
      jobId: [null, Validators.required],
      posId: [null, Validators.required],
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
    const newEmployee = {
      name: this.employeeForm.value.name,
      document: this.employeeForm.value.document,
      phone: this.employeeForm.value.phone,
      address: this.employeeForm.value.address,
      email: this.employeeForm.value.email,
      jobId: Number(this.employeeForm.value.jobId) ,
      posId: Number(this.employeeForm.value.posId)};
    this.employeesService.createEmployee(newEmployee).subscribe((employee) =>{
      console.log(employee);
    });
    
  }

  goBack() {
    this.location.back();
  }
}
