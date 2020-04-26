import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  BRANDS_URL = `${environment.backendUrl}/brands`;

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http
      .get(this.BRANDS_URL)
      .pipe(map((response: Brand[]) => response));
  }

  getBrandById(id: number): Observable<Brand> {
    return this.http
      .get(`${this.BRANDS_URL}/${id}`)
      .pipe(map((response: Brand) => response));
  }

  createBrand(brandName: string): Observable<Brand> {
    return this.http
      .post(this.BRANDS_URL, { brandName })
      .pipe(map((response: Brand) => response));
  }

  updateBrand(id: number, brandName: string) {
    return this.http.put(`${this.BRANDS_URL}/${id}`, { brandName });
  }
}
