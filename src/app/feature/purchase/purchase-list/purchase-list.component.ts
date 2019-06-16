import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PurchaseModel } from '../models';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  @Input() public purchases:Array<PurchaseModel>;
  @Output() public editPurchase = new EventEmitter();
  @Output() public deletePurchse = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onEditPurchase(event){
      this.editPurchase.emit(event);
  }
  public onDeletePurchase(event){
      this.deletePurchse.emit(event);

  }

}
