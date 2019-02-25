import { Component, OnInit } from '@angular/core';
import { Stock } from './stock.model';
import { StockService } from './stock.service';
import { ProductService } from '../product/product.service';
import { forkJoin } from 'rxjs';

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
    forkJoin(this.getStocks(), this.getProducts()).subscribe(
      ([stocksData, productsData]) => {
        const productMap = new Map();
        for (const product of productsData) {
          productMap.set(product.id, product.name);
        }
        for (const stock of stocksData) {
          stock.productName = productMap.get(stock.productId);
        }
        this.stocks = stocksData;
        this.products = productsData;
      }
    );
  }

  private getStocks() {
    return this.stockService.getStocks();
  }
  private getProducts() {
    return this.productService.getProducts();
  }
}
