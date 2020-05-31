import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/core/services/sales.service';
import { Sale } from 'src/app/shared/models/sale.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html'
})
export class SaleComponent implements OnInit {
  sale: Sale;
  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      const saleId = Number(id);
      this.getSaleById(saleId);
    });
  }

  getSaleById(id: number): void {
    this.salesService.getSaleById(id)
      .subscribe(sale => {
        this.sale = sale;
      });
  }

}
