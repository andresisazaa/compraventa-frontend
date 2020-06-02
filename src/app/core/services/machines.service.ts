import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  private MACHINES_URL = `${environment.backendUrl}/machines`;

  constructor(private http: HttpClient) {}

  getMachines(): Observable<[]> {
    return this.http
      .get(this.MACHINES_URL)
      .pipe(map((response: []) => response));
  }

  getMachineById(id: number) {
    return this.http.get(`${this.MACHINES_URL}/${id}`);
  }

  getAvailableMachines(): Observable<[]> {
    const params = new HttpParams().set('status', '2');
    return this.http
      .get(this.MACHINES_URL, { params })
      .pipe(map((response: []) => response));
  }

  updateMachineById(machineData: object): Observable<string> {
    return this.http
      // tslint:disable-next-line: no-string-literal
      .put(`${this.MACHINES_URL}/${machineData['id']}`, {
        ...machineData,
      })
      .pipe(map((response: { message: string }) => response.message));
  }
}
