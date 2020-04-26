import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private EMPLOYEES_URL = `${environment.backendUrl}/employees`;

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.EMPLOYEES_URL);
  }

  getEmployeeById(id: number) {
    return this.http.get(`${this.EMPLOYEES_URL}/${id}`);
  }
}
