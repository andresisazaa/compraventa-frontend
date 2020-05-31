import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/core/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  loadingCustomers: boolean;
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.loadingCustomers = true;
    this.customersService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.loadingCustomers = false;
      });
  }
}
