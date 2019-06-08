import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly customersUrl =  'customer'; 
  constructor(private http: HttpClient) { }

  getCustomers() {
    const url = 'customer';
    return this.http.get(url)
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }

  getProducts() {
    const url = 'product';
    return this.http.get(url)
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }

  getPurchases() {
    const url = 'purchase';
    return this.http.get(url)
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }

  getStocks() {
    const url = 'stock';
    return this.http.get(url)
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }

  getSales() {
    const url = 'sale';
    return this.http.get(url)
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }
}
