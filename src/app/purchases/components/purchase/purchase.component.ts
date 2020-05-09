import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/shared/services/purchases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
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
