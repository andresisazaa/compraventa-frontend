import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/core/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  loadingCustomers: boolean;
  constructor(private customersService: CustomersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.loadingCustomers = true;
    this.customersService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.loadingCustomers = false;
        console.log(this.customers);
      });
  }

  viewCustomerDetails(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
