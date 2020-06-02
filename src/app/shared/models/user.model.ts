export interface User {
  id: number;
  name: string;
  document: string;
  phoneNumber?: string;
  email: string;
  address?: string;
  job: { id: number; name: string; salary: number };
  pointOfSale: { id: number; name: string; address: string };
}
