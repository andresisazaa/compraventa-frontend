import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/core/services/sales.service';
import { Sale } from 'src/app/shared/models/sale.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
  sales: Sale[] = [];
  loadingSales: boolean;
  constructor(
    private salesService: SalesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales(): void {
    this.loadingSales = true;
    this.salesService.getSales()
      .subscribe(sales => {
        this.sales = sales;
        this.loadingSales = false;
      }, error => {
        this.loadingSales = false;
        console.log(error);
      });
  }


  viewSaleDetail(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
