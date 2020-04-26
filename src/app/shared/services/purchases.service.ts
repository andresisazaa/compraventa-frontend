import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  private PURCHASES_URL = `${environment.backendUrl}/purchases`;
  constructor(private http: HttpClient) {}

  getPurchases() {
    return this.http.get(this.PURCHASES_URL);
  }

  getPurchaseById(id: number) {
    return this.http.get(`${this.PURCHASES_URL}/${id}`);
  }
}
