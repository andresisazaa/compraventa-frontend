import { Machine } from './machine.model';
import { Customer } from './customer.model';

export interface Purchase {
    id?: number;
    machines: Machine[];
    customer: Customer;
    value: number;
}