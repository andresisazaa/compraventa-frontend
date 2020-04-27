import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PointsOfSaleService } from 'src/app/shared/services/points-of-sale.service';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { Job } from 'src/app/shared/models/job.model';
import { PointOfSale } from 'src/app/shared/models/pointOfSale.model';

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
    private fb: FormBuilder,
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
    console.log(this.employeeForm.value);
  }
}
