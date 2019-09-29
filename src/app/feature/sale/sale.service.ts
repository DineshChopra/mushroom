import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private readonly salesUrl = 'sale';
  constructor(private http: HttpClient) { }

  getSales(): Observable<any> {
    return this.http.get(this.salesUrl).pipe(
      map(response => response['data'])
    );
  }


  saleCreate(sale: Sale) {
    console.log('Sale object -- ',sale);
    if (sale.id) {
      return this.updateSale(sale);
    } else {
      return this.addSale(sale);
    }
  }
  /** POST: add a new sale to the server */
  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.salesUrl, sale);
  }
  /** PUT: update the sale on the server */
  updateSale(sale: Sale): Observable<any> {
    const url = `${this.salesUrl}/${sale.productId}`;
    return this.http.put(url, sale);
  }

  deleteSale(sale: Sale | string): Observable<Sale> {
    const id = typeof sale === 'string' ? sale : sale.productId;
    const url = `${this.salesUrl}/${id}`;

    return this.http.delete<Sale>(url);
  }
}
