import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Provider } from 'src/app/shared/models/provider.model';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html'
})
export class ProviderFormComponent implements OnInit {
  providerForm: FormGroup;

  @Output() submitProvider: EventEmitter<Provider>;
  @Input() provider?: Provider;
  @Input() submitMessage: string;


  constructor(private fb: FormBuilder) {
    this.submitProvider = new EventEmitter<Provider>();
  }

  ngOnInit(): void {
    this.providerForm = this.createProviderForm();
  }

  submit(): void {
    if (this.providerForm.invalid) {
      return;
    }

    const provider: Provider = this.providerForm.value;
    this.submitProvider.emit(provider);
  }

  createProviderForm(): FormGroup {
    return this.fb.group({
      businessName: [
        this.provider ? this.provider.businessName : null,
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
        ],
      ],
      nit: [
        this.provider ? this.provider.nit : null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5),
        ],
      ],
      phoneNumber: [
        this.provider ? this.provider.phoneNumber : null,
        [
          Validators.maxLength(10),
          Validators.minLength(8)
        ]
      ],
      email: [
        this.provider ? this.provider.email : null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      address: [
        this.provider ? this.provider.address : null,
        [
          Validators.maxLength(60),
          Validators.minLength(10)
        ]
      ]
    });
  }

  get businessName(): AbstractControl {
    return this.providerForm.get('businessName');
  }

  get nit(): AbstractControl {
    return this.providerForm.get('nit');
  }

  get email(): AbstractControl {
    return this.providerForm.get('email');
  }

  get phoneNumber(): AbstractControl {
    return this.providerForm.get('phoneNumber');
  }

  get address(): AbstractControl {
    return this.providerForm.get('address');
  }
}
