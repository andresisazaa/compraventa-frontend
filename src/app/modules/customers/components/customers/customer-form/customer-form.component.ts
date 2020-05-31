import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  @Output() submitCustomer: EventEmitter<Customer>;
  @Input() customer?: Customer;
  @Input() submitMessage: string;
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.submitCustomer = new EventEmitter<Customer>();
  }

  ngOnInit(): void {
    this.customerForm = this.createCustomerForm();
  }

  createCustomerForm(): FormGroup {
    return this.fb.group({
      name: [this.customer ? this.customer.name : null, [Validators.required, Validators.minLength(10)]],
      document: [this.customer ? this.customer.document : null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      phoneNumber: [this.customer ? this.customer.phoneNumber : null, [Validators.minLength(8), Validators.maxLength(10)]],
      email: [this.customer ? this.customer.email : null, [Validators.required, Validators.email]],
      address: [this.customer ? this.customer.address : null, [Validators.minLength(10), Validators.maxLength(60)]]
    });
  }


  get name(): AbstractControl {
    return this.customerForm.get('name');
  }

  get document(): AbstractControl {
    return this.customerForm.get('document');
  }

  get phoneNumber(): AbstractControl {
    return this.customerForm.get('phoneNumber');
  }

  get email(): AbstractControl {
    return this.customerForm.get('email');
  }

  get address(): AbstractControl {
    return this.customerForm.get('address');
  }


  submit(): void {
    if (this.customerForm.invalid) {
      return;
    }
    const customer: Customer = this.customerForm.value;
    this.submitCustomer.emit(customer);
  }
}
