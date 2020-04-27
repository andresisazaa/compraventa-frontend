import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private EMPLOYEES_URL = `${environment.backendUrl}/employees`;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<[]> {
    return this.http.get(this.EMPLOYEES_URL)
    .pipe(map((response: []) => response));
  }

  getEmployeeById(id: number) {
    return this.http.get(`${this.EMPLOYEES_URL}/${id}`);
  }
}
