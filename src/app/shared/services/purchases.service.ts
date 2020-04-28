import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  private PURCHASES_URL = `${environment.backendUrl}/purchases`;
  constructor(private http: HttpClient) {}

  getPurchases(): Observable<[]> {
    return this.http
      .get(this.PURCHASES_URL)
      .pipe(map((response: []) => response));
  }

  getPurchaseById(id: number) {
    return this.http.get(`${this.PURCHASES_URL}/${id}`);
  }

  createPurchase(purchaseInfo) {
    return this.http.post(this.PURCHASES_URL, purchaseInfo);
  }
}
