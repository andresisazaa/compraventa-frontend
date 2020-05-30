import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer.model';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customerForm = this.createCustomerForm();
  }

  createCustomerForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      document: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      cellphone: [null, [Validators.minLength(8), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.minLength(10), Validators.maxLength(60)]]
    });
  }


  get name(): AbstractControl {
    return this.customerForm.get('name');
  }

  get document(): AbstractControl {
    return this.customerForm.get('document');
  }

  get cellphone(): AbstractControl {
    return this.customerForm.get('cellphone');
  }

  get email(): AbstractControl {
    return this.customerForm.get('email');
  }

  get address(): AbstractControl {
    return this.customerForm.get('address');
  }


  submit() {
    console.log(this.customerForm);
    console.log(this.customerForm.value);
    console.log('VALID', this.customerForm.valid);
    if (this.customerForm.invalid) {
      return;
    }

    const customer: Customer = this.customerForm.value;
    this.customersService.createCustomer(customer)
      .subscribe(customerCreated => {
        console.log(customerCreated);
      });
    console.log('CUSTOMER', customer, customer.name);

  }
}
