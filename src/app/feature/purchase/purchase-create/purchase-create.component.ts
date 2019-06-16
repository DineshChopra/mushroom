import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { PurchaseModel, ProductModel } from '../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-create',
  templateUrl: './purchase-create.component.html',
  styleUrls: ['./purchase-create.component.scss']
})
export class PurchaseCreateComponent implements OnInit, OnChanges {

  @Input() public purchases:Array<PurchaseModel>;
  @Input() public selectedPurchaseItem:PurchaseModel;
  @Input() public products:Array<ProductModel>;
  @Output() public purchaseCreate = new EventEmitter();
  @Output() public cancelPurchase = new EventEmitter();

  public form:FormGroup;
  public action:string = 'Save';
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
      this.initializeForm();
  }
  ngOnChanges(){
    if(this.selectedPurchaseItem){
      this.action = this.selectedPurchaseItem.id ? 'Update' : 'Save';
    }
  }
  private initializeForm(): void {
    const {id,productId, quantity,price, totalPrice} = this.selectedPurchaseItem;
    this.form = this._formBuilder.group({
      id:[id],
      productId: [productId, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      price:[price, [Validators.required]],
      totalPrice:[totalPrice]
    });
  }
  public onSubmit() {
    let purchase = this.form.value as PurchaseModel;
    purchase = {...this.selectedPurchaseItem, ...purchase};
    this.purchaseCreate.emit(purchase);
  }
  public cancelPurchaseItem() {
    this.cancelPurchase.emit();
  }

}
