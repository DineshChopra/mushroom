import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private readonly salesUrl = 'sales';
  constructor(private http: HttpClient) { }

  getSales(): Observable<any> {
    return this.http.get(this.salesUrl);
  }


  saleCreate(sale: Sale) {
    if (sale._id) {
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
    const url = `${this.salesUrl}/${sale._id}`;
    return this.http.put(url, sale);
  }

  deleteSale(sale: Sale | string): Observable<Sale> {
    const id = typeof sale === 'string' ? sale : sale._id;
    const url = `${this.salesUrl}/${id}`;

    return this.http.delete<Sale>(url);
  }
}
