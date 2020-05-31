import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { Brand } from 'src/app/shared/models/brand.model';
import Swal from 'sweetalert2';
import { BrandsService } from 'src/app/core/services/brands.service';
import { ModelsService } from 'src/app/core/services/models.service';
@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html'
})
export class NewModelComponent implements OnInit {
  modelForm: FormGroup;
  brands: Brand[] = [];
  constructor(
    private fb: FormBuilder,
    private brandsService: BrandsService,
    private modelsService: ModelsService
  ) { }

  ngOnInit(): void {
    this.getFormData().subscribe((brands) => {
      this.brands = brands;
      this.modelForm = this.createModelForm();
    });
  }

  getBrands() {
    this.brandsService.getBrands().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  }
  getFormData() {
    return this.brandsService.getBrands();
  }

  createModelForm(): FormGroup {
    return this.fb.group({
      modelName: [null, [Validators.required, Validators.minLength(4)]],
      description: [null, [Validators.maxLength(255)]],
      brandId: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.modelForm.invalid) {
      return;
    }
    const newModel = {
      modelName: this.modelForm.value.modelName,
      description: this.modelForm.value.description,
      brandId: this.modelForm.value.brandId,
    };
    Swal.showLoading();
    this.modelsService.createModel(newModel).subscribe(
      (model) => {
        Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          title: `¡Modelo creado correctamente!`,
          text: `id: ${model.id}, modelo: ${model.modelName}`,
        });
      },
      (error) => {
        Swal.hideLoading();
        Swal.fire({
          icon: 'error',
          title: '¡Ocurrió un error!',
          text: `${error.message}`,
        });
      }
    );
  }

  get modelName(): AbstractControl {
    return this.modelForm.get('modelName');
  }

  get description(): AbstractControl {
    return this.modelForm.get('description');
  }

  get brandId(): AbstractControl {
    return this.modelForm.get('brandId');
  }
}
