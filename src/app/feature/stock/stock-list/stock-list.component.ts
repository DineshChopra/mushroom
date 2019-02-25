import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../stock.model';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @Input() stocks: Stock[];
  @Input() products: Product[];
  @Output() editStockEvent = new EventEmitter();
  @Output() deleteStockEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEditStock(stock: Stock) {
    this.editStockEvent.emit(stock);
  }

  onDeleteStock(stock: Stock) {
    this.deleteStockEvent.emit(stock);
  }

}
