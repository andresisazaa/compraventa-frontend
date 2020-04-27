import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { BrandsService } from 'src/app/shared/services/brands.service';
import { Brand } from 'src/app/shared/models/brand.model';

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
    console.log(this.brandForm.value);
    const newBrand: Brand = this.brandForm.value;
    this.brandsService.createBrand(newBrand).subscribe((brand) => {
      console.log(brand, 'BRAND CREADA');
    });
  }
}
