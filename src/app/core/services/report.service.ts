import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Sale} from "../../shared/models/sale.model";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private REPORT_URL = `${environment.backendUrl}/reports`;
  constructor(private http: HttpClient) {}

  getBudgetReport(): Observable<any> {
    return this.http.get(`${this.REPORT_URL}/sales/file`, {
        responseType: 'blob'
      });
  }

  getSalesPointOfSaleStatistic(): Observable<any> {
    return this.http
      .get(`${this.REPORT_URL}/sales/pos`)
      .pipe(map((response: []) => response));
  }

  getPurchasesPointOfSaleStatistic(): Observable<any> {
    return this.http
      .get(`${this.REPORT_URL}/purchases/pos`)
      .pipe(map((response: []) => response));
  }
}
