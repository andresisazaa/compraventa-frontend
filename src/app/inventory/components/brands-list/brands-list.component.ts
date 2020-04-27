import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/shared/services/brands.service';
import { Brand } from 'src/app/shared/models/brand.model';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss'],
})
export class BrandsListComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.brandsService.getBrands().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  }
}
