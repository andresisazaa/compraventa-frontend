import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../../models/model.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  MODELS_URL = `${environment.backendUrl}/models`;
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

  createModel(
    modelName: string,
    brandId: number,
    description?: string
  ): Observable<Model> {
    const modelData = { modelName, brandId, description };
    return this.http
      .post(`${this.MODELS_URL}`, modelData)
      .pipe(map((response: Model) => response));
  }

  updateModel(id: number, modelData) {
    return this.http.put(`${this.MODELS_URL}/${id}`, modelData);
  }
}
