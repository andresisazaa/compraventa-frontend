import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  customerId: number;

  constructor(private customerService: CustomersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
    this.route.params.subscribe(({id}) => {
      this.customerId = id;
      this.customerService.getCustomerById(id).subscribe(customer => {
        this.customer = customer;
      }, err => {
        this.router.navigateByUrl('/clientes');
      });
    });
  }

  updateCustomer(customer: Customer): void {
    const customerData : Customer = {
      id: this.customerId,
      ...customer
    }

    this.customerService.updateCustomer(customerData).subscribe(message => {
      Swal.fire({
        icon: 'success',
        title: '!Operación exitosa!',
        text: message,
        onClose: () => { this.router.navigateByUrl('/clientes'); }
      });
    }, err => {
      Swal.fire({
        icon: 'error',
        title: '!Ocurrió un error!',
        text: err.message
      });
    });
  }

}
