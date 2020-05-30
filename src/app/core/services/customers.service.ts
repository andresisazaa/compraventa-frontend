import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private CUSTOMERS_URL = `${environment.backendUrl}/customers`;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.CUSTOMERS_URL)
      .pipe(map((response: Customer[]) => response));
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get(`${this.CUSTOMERS_URL}/${id}`)
      .pipe(map((response: Customer) => response));
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(this.CUSTOMERS_URL, { ...customer })
      .pipe(map((response: Customer) => response));
  }

  updateCustomer(customer: Customer): Observable<string> {
    return this.http.put(`${this.CUSTOMERS_URL}/${customer.id}`, { ...customer })
      .pipe(map((response: string) => response));
  }

  deleteCustomer(id: number): Observable<string> {
    return this.http.delete(`${this.CUSTOMERS_URL}/${id}`)
      .pipe(map((response: string) => response));
  }
}
