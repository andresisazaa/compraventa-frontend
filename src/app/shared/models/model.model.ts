import { Brand } from './brand.model';

export interface Model {
  id?: number;
  modelName: string;
  description: string;
  brand: Brand;
}
