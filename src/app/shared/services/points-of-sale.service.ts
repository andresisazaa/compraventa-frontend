import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PointOfSale } from '../models/pointOfSale.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PointsOfSaleService {
  private POS_URL = `${environment.backendUrl}/pos`;

  constructor(private http: HttpClient) {}

  getPointsOfSale(): Observable<PointOfSale[]> {
    return this.http
      .get(this.POS_URL)
      .pipe(map((response: PointOfSale[]) => response));
  }

  getPointOfSaleById(id: number): Observable<PointOfSale> {
    return this.http
      .get(`${this.POS_URL}/${id}`)
      .pipe(map((response: PointOfSale) => response));
  }

  createPointOfSale(posData: PointOfSale): Observable<PointOfSale> {
    return this.http
      .post(this.POS_URL, posData)
      .pipe(map((response: PointOfSale) => response));
  }

  updatePointOfSale(id: number, posData) {
    return this.http.put(`${this.POS_URL}/${id}`, posData);
  }
}
