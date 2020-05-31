import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsRoutingModule } from "./reports.routes";
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleChartsModule } from "angular-google-charts";


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    GoogleChartsModule
  ]
})
export class ReportsModule { }
