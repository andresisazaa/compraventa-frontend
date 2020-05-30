import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from 'src/app/shared/models/brand.model';
import { BrandsService } from 'src/app/core/services/brands.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.scss'],
})
export class NewBrandComponent implements OnInit {
  constructor(private fb: FormBuilder, private brandsService: BrandsService) {}
  brandForm: FormGroup;

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      brandName: [null, Validators.required],
      brandLogo: [null],
    });
  }

  onSubmit() {
    if (this.brandForm.invalid) {
      return;
    }
    Swal.showLoading();
    const newBrand: Brand = this.brandForm.value;
    this.brandsService.createBrand(newBrand).subscribe(
      (brand) => {
        Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          title: `¡Marca creada correctamente!`,
          text: `id: ${brand.id}, marca: ${brand.brandName}`,
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
}
