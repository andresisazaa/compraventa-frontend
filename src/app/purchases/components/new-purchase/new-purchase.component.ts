import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';
import { ProvidersService } from 'src/app/shared/services/providers.service';
import { ModelsService } from 'src/app/shared/services/models.service';
import { Model } from 'src/app/shared/models/model.model';
@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss'],
})
export class NewPurchaseComponent implements OnInit {
  purchaseForm: FormGroup;
  machines: FormArray;
  models: Model[] = [];
  constructor(
    private fb: FormBuilder,
    private providersService: ProvidersService,
    private modelsService: ModelsService
  ) {}

  ngOnInit(): void {
    this.getModels();
    this.purchaseForm = this.fb.group({
      providerId: [null, Validators.required],
      machines: this.fb.array([this.createItem()]),
    });
    console.log(this.purchaseForm);
  }

  getModels(): void {
    this.modelsService.getModels().subscribe((models) => {
      this.models = models;
    });
  }

  createPurchaseForm(): FormGroup {
    return this.fb.group({
      providerId: [null, Validators.required],
      machines: this.fb.array([]),
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      modelId: [null, Validators.required],
      type: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  addItem(): void {
    this.machines = this.purchaseForm.get('machines') as FormArray;
    this.machines.push(this.createItem());
  }

  removeItem(index: number): void {
    if (!this.machines || this.machines.length === 1) {
      return;
    }
    this.machines.removeAt(index);
  }

  get providerId(): AbstractControl {
    return this.purchaseForm.get('providerId');
  }

  get machinesControls() {
    // tslint:disable-next-line: no-string-literal
    return this.purchaseForm.get('machines')['controls'] as FormGroup;
  }
  onSubmit() {
    console.log(this.purchaseForm.value);
  }
}
