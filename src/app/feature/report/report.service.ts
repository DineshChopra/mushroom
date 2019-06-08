import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getSales(searchCondition) {
    let params = new HttpParams();
    const {customer, product, startDate, endDate} = searchCondition;
    if (customer) {
      params = params.append('customerId', searchCondition.customer);
    }
    if (product) {
      params = params.append('productId', searchCondition.product);
    }
    if (startDate) {
      params = params.append('startDate', searchCondition.startDate);
    }
    if (endDate) {
      params = params.append('endDate', searchCondition.endDate);
    }


    const url = 'sale';
    return this.http.get(url, {params})
                    .pipe(
                      map(response => {
                        return response['data'];
                      })
                    );
  }
}
