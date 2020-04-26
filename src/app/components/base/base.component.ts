import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { MachinesService } from 'src/app/shared/services/machines.service';
import { PointsOfSaleService } from 'src/app/shared/services/points-of-sale.service';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { ModelsService } from 'src/app/shared/services/models.service';
import { BrandsService } from 'src/app/shared/services/brands.service';
import { PurchasesService } from 'src/app/shared/services/purchases.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  open = true;
  constructor(
    private machinesService: MachinesService,
    private pointsOfSaleService: PointsOfSaleService,
    private jobsService: JobsService,
    private modelsService: ModelsService,
    private brandsService: BrandsService,
    private employeesService: EmployeesService,
    private purchasesService: PurchasesService
  ) {}
  ngOnInit(): void {
    this.machinesService.getMachines().subscribe(console.log);
    this.pointsOfSaleService.getPointsOfSale().subscribe(console.log);
    this.jobsService.getJobs().subscribe(console.log);
    this.modelsService.getModels().subscribe(console.log);
    this.brandsService.getBrands().subscribe(console.log);
    this.employeesService.getEmployees().subscribe(console.log);
    this.purchasesService.getPurchases().subscribe(console.log);
  }
  changeNavbar(status: boolean) {
    this.open = status;
  }
  onclick() {}
}
