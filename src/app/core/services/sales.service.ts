import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from 'src/app/shared/models/sale.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private SALES_URL = `${environment.backendUrl}/sales`;
  constructor(private http: HttpClient) { }

  getSales(): Observable<Sale[]> {
    return this.http.get(`${this.SALES_URL}`)
      .pipe(map((response: Sale[]) => response));
  }

  getSaleById(id: number): Observable<Sale> {
    return this.http.get(`${this.SALES_URL}/${id}`)
      .pipe(map((response: Sale) => response));
  }

  createSale(saleData: object): Observable<Sale> {
    return this.http.post(`${this.SALES_URL}`, { ...saleData })
      .pipe(map((response: Sale) => response));
  }
}
