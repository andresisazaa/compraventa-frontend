export interface Machine {
  id?: number;
  model: string;
  brand: string;
  purchaseValue: number;
  saleValue?: number;
  status: string;
}
