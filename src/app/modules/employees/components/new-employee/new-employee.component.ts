import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from 'src/app/shared/models/job.model';
import { PointOfSale } from 'src/app/shared/models/pointOfSale.model';
import { Employee } from 'src/app/shared/models/employee.model';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { JobsService } from 'src/app/core/services/jobs.service';
import { PointsOfSaleService } from 'src/app/core/services/points-of-sale.service';
import { EmployeesService } from 'src/app/core/services/employees.service';

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
    if (this.employeeForm.invalid) {
      return;
    }
    const newEmployee = {
      name: this.employeeForm.value.name,
      document: this.employeeForm.value.document,
      phone: this.employeeForm.value.phone,
      address: this.employeeForm.value.address,
      email: this.employeeForm.value.email,
      jobId: Number(this.employeeForm.value.jobId),
      posId: Number(this.employeeForm.value.posId),
    };
    this.employeesService.createEmployee(newEmployee).subscribe(
      (employee) => {
        Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          text: `Empleado ${employee['name']} creado correctamente`,
        });
      },
      (error) => {
        Swal.hideLoading();
        Swal.fire({
          icon: 'error',
          title: '¡Ocurrió un error!',
          text: `No se pudo crear el empleado`,
        });
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
