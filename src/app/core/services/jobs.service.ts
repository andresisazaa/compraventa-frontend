import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Job } from 'src/app/shared/models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private JOBS_URL = `${environment.backendUrl}/jobs`;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http
      .get(this.JOBS_URL)
      .pipe(map((response: Job[]) => response));
  }

  getJobById(id: number): Observable<Job> {
    return this.http
      .get(`${this.JOBS_URL}/${id}`)
      .pipe(map((response: Job) => response));
  }
}
