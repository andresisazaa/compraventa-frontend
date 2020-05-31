import { Machine } from './machine.model';

export interface Sale {
  id?: number;
  saleValue: number;
  date: string;
  customerName: string;
  employeeName: string;
  machines?: Machine[];
}
