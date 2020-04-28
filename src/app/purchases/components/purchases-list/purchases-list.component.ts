import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/shared/services/purchases.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss'],
})
export class PurchasesListComponent implements OnInit {
  purchases = [];
  constructor(
    private purchasesService: PurchasesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPurchases();
    this.purchasesService.getPurchaseById(1).subscribe(console.log);
  }

  getPurchases() {
    this.purchasesService.getPurchases().subscribe((purchases) => {
      this.purchases = purchases;
      console.log(this.purchases);
    });
  }

  viewPurchaseDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
