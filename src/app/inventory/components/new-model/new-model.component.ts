import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { BrandsService } from 'src/app/shared/services/brands.service';
import { ModelsService } from 'src/app/shared/services/models.service';
import { Brand } from 'src/app/shared/models/brand.model';
import { Model } from 'src/app/shared/models/model.model';
@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrls: ['./new-model.component.scss'],
})
export class NewModelComponent implements OnInit {
  modelForm: FormGroup;
  brands: Brand[] = [];
  constructor(
    private fb: FormBuilder,
    private brandsService: BrandsService,
    private modelsService: ModelsService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.modelForm = this.createModelForm();
  }

  getBrands() {
    this.brandsService.getBrands().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  }

  createModelForm(): FormGroup {
    return this.fb.group({
      modelName: [null, Validators.required],
      description: [null],
      brandId: [null, Validators.required],
    });
  }

  onSubmit() {
    const newModel = {
      modelName: this.modelForm.value.modelName,
      description: this.modelForm.value.description,
      brandId: this.modelForm.value.brandId,
    };
    this.modelsService.createModel(newModel).subscribe((model) => {
    });
  }
}
