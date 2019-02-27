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
    this.getStocksData();
  }

  updateSelectedStock(stock = new Stock()) {
    this.getProductsData();
    this.selectedStock = stock;
  }
  onStockCreateEvent(stock: Stock) {
    this.stockService.stockCreate(stock).subscribe(
      (data) => {
        this.selectedStock = undefined;
        this.getStocksData();
      }
    );
  }
  onCancelEvent() {
    this.selectedStock = undefined;
  }
  onEditStockEvent(stock: Stock) {
    this.updateSelectedStock(stock);
  }
  onDeletestockEvent(stock: Stock) {
    this.stockService.deleteStock(stock).subscribe(
      data => {
        this.getStocksData();
      }
    );
  }
  private getStocksData() {
    this.stockService.getStocks().subscribe(
      (stockData) => { this.stocks = stockData; }
    );
  }
  private getProductsData() {
    this.productService.getProducts().subscribe(
      (productData) => { this.products = productData; }
    );
  }
}
