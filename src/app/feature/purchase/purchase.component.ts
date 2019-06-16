import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';
import { PurchaseModel } from './models';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  public purchases: Array<PurchaseModel> = [];
  public selectedPurchaseItem: PurchaseModel;
  public editPurchase: boolean = false;
  public products: Array<any> = [];
  constructor(private _purchaseService: PurchaseService) { }

  ngOnInit() {
    this.getProduct();
    this.getPurchase();
  }
  public getPurchase() {
    this._purchaseService.getPurchase().subscribe(data => {
      if (data) {
        this.purchases = data;
      }
    });
  }
  public getProduct() {
    this._purchaseService.getProducts().subscribe(data => {
      if (data) {
        this.products = data;
      }
    })
  }
  public createPurchase() {
    this.editPurchase = !this.editPurchase;
    this.selectedPurchaseItem = new PurchaseModel();
  }
  public onEditPurchase(event) {
    this.editPurchase = true;
    this.selectedPurchaseItem = event;

  }
  public onDeletePurchase(event: PurchaseModel) {
    this._purchaseService.deletePurchase(event).subscribe(data => {
      this.getPurchase();
    })
  }
  public onPurchaseCreate(event: PurchaseModel) {
    this._purchaseService.perchaseCreate(event).subscribe(
      (data) => {
        this.editPurchase = false;
        this.getPurchase();
      }
    );
  }
  public onCancelPurchase() {
    this.editPurchase = false;
  }

}
