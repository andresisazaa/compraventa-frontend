import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchasesService } from 'src/app/core/services/purchases.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
})
export class PurchaseComponent implements OnInit {
  purchase;
  constructor(
    private purchasesService: PurchasesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.purchasesService.getPurchaseById(id).subscribe((purchase) => {
        this.purchase = purchase;
      });
    });
  }
}
