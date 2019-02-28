import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {

  @Input() sales: Sale[];
  @Output() editSaleEvent = new EventEmitter();
  @Output() deleteSaleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onEditSale(sale: any) {
    this.editSaleEvent.emit(sale);
  }

  onDeleteSale(sale: any) {
    this.deleteSaleEvent.emit(sale);
  }
}
