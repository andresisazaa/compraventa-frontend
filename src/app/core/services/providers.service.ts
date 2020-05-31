import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provider } from 'src/app/shared/models/provider.model';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private PROVIDERS_URL = `${environment.backendUrl}/providers`;

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http
      .get(this.PROVIDERS_URL)
      .pipe(map((response: Provider[]) => response));
  }

  getProviderById(id: number): Observable<Provider> {
    return this.http
      .get(`${this.PROVIDERS_URL}/${id}`)
      .pipe(map((response: Provider) => response));
  }

  createProvider (provider: Provider): Observable<Provider> {
    return this.http
      .post(this.PROVIDERS_URL, {...provider})
      .pipe(map((response: Provider) => response));
  }

  updateProviderById (provider: Provider): Observable<string> {
    return this.http
      .put(`${this.PROVIDERS_URL}/${provider.id}`, {...provider})
      .pipe(map((response: {message:string}) => response.message));
  }
}
