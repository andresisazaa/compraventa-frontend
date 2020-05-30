import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
