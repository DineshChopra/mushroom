import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from './stock.model';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly stockUrl = 'stocks';
  constructor(private http: HttpClient) { }

  getStocks(): Observable<any[]> {
    return this.http.get<any[]>(this.stockUrl)
      .pipe(
        map(data => {
          return data.map(stock => {
            const { product, price, quantity, totalPrice, purchaseDate } = stock;
            const id = stock._id;
            return {
              id, product, price, quantity, totalPrice, purchaseDate
            };
          });
        })
      );
  }


  stockCreate(stock) {
    if (stock.id) {
      return this.updateStock(stock);
    } else {
      return this.addStock(stock);
    }
  }
  /** POST: add a new stock to the server */
  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.stockUrl, stock);
  }
    /** PUT: update the stock on the server */
  updateStock(stock: Stock): Observable<any> {
    const url = `${this.stockUrl}/${stock.id}`;
    return this.http.put(url, stock);
  }


  deleteStock(stock: Stock | string): Observable<Stock> {
    const id = typeof stock === 'string' ? stock : stock.id;
    const url = `${this.stockUrl}/${id}`;

    return this.http.delete<Stock>(url);
  }

}
