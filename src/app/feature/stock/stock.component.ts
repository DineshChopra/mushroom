import { Component, OnInit } from '@angular/core';
import { Stock } from './stock.model';
import { StockService } from './stock.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  selectedStock: Stock;
  stocks: Stock[];
  products = [];
  constructor(private stockService: StockService,
    private productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  updateSelectedStock(stock = new Stock()) {
    this.selectedStock = stock;
  }
  onStockCreateEvent(stock: Stock) {
    this.stockService.stockCreate(stock).subscribe(
      (data) => {
        this.selectedStock = undefined;
        this.getData();
      }
    );
  }
  onCancelEvent() {
    this.selectedStock = undefined;
  }
  onEditStockEvent(stock: Stock) {
    this.selectedStock = stock;
  }
  onDeletestockEvent(stock: Stock) {
    this.stockService.deleteStock(stock).subscribe(
      data => {
        this.getData();
      }
    );
  }
  private getData() {
    this.getStocks().subscribe(
      (stocksData) => {
        this.stocks = stocksData;
      }
    );
  }

  private getStocks() {
    return this.stockService.getStocks();
  }

}
