import { Machine } from './machine.model';
import { Provider } from './provider.model';

export interface Purchase {
  id?: number;
  machines: Machine[];
  provider: Provider;
  value: number;
}
