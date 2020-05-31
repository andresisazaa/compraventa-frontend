import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.model';
import { CustomersService } from 'src/app/core/services/customers.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html'
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private customersService: CustomersService,
    private router: Router) { }

  ngOnInit(): void { }

  createCustomer(customer: Customer): void {
    this.customersService.createCustomer(customer)
      .subscribe(customerCreated => {
        Swal.fire({
          icon: 'success',
          title: '!Operación exitosa!',
          text: `¡Cliente ${customerCreated.name} agregado correctamente (id: ${customerCreated.id})!`,
          onClose: () => { this.router.navigateByUrl('/clientes'); }
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: '!Ocurrió un error!',
          text: error.message
        });
      });

  }

}
