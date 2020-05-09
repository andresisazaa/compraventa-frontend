import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Model } from '../models/model.model';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  private MODELS_URL = `${environment.backendUrl}/models`;

  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http
      .get(this.MODELS_URL)
      .pipe(map((response: Model[]) => response));
  }

  getModelById(id: number): Observable<Model> {
    return this.http
      .get(`${this.MODELS_URL}/${id}`)
      .pipe(map((response: Model) => response));
  }

  createModel(modelData): Observable<Model> {
    return this.http
      .post(`${this.MODELS_URL}`, modelData)
      .pipe(map((response: Model) => response));
  }

  updateModel(id: number, modelData) {
    return this.http.put(`${this.MODELS_URL}/${id}`, modelData);
  }
}
