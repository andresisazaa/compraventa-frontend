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
import { PurchasesService } from 'src/app/shared/services/purchases.service';
import { ModelsService } from 'src/app/shared/services/models.service';
import { Model } from 'src/app/shared/models/model.model';
import Swal from 'sweetalert2';
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
    private modelsService: ModelsService,
    private purchaseService: PurchasesService,
    
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

    if (this.purchaseForm.invalid) {
      return;
    }

    const purchaseData = {
      providerId: Number(this.purchaseForm.value.providerId),
      machines: this.purchaseForm.value.machines.map(machine => ({
        ...machine,
        modelId: Number(machine.modelId),
        purchaseValue: machine.price
      }))
    };

    this.purchaseService.createPurchase(purchaseData).subscribe((purchase) => {
      Swal.hideLoading();
      Swal.fire({
        icon: 'success',
        text: `Compra ${purchase['id']} creada correctamente`,
      });
    },
    (error) => {
      Swal.hideLoading();
      Swal.fire({
        icon: 'error',
        title: '¡Ocurrió un error!',
        text: `No se pudo crear la compra ${error.message}`,
      });
    });
  }
}
