import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchasesService } from 'src/app/core/services/purchases.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html'
})
export class PurchasesListComponent implements OnInit {
  purchases = [];
  constructor(
    private purchasesService: PurchasesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases() {
    this.purchasesService.getPurchases().subscribe((purchases) => {
      this.purchases = purchases;
    });
  }

  viewPurchaseDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
