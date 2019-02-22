import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly productUrl = environment.apiBaseUrl + 'products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl)
                    .pipe(
                      map( data => {
                        return data.map(customer => {
                          const {name, productType} = customer;
                          const id = customer._id;
                          return {
                            id, name, productType
                          };
                        });
                      })
                    );
  }


  productCreate(product) {
    if (product.id) {
      return this.updateProduct(product);
    } else {
      return this.addProduct(product);
    }
  }
  /** POST: add a new product to the server */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, httpOptions);
  }
    /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put(url, product, httpOptions);
  }


  deleteProduct(product: Product | string): Observable<Product> {
    const id = typeof product === 'string' ? product : product.id;
    const url = `${this.productUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions);
  }

}
