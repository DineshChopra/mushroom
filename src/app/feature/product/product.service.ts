import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly productUrl = 'products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl)
                    .pipe(
                      map( data => {
                        return data.map(product => {
                          const {name, productType, stock} = product;
                          const id = product._id;
                          return {
                            id, name, productType, stock
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
    return this.http.post<Product>(this.productUrl, product);
  }
    /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put(url, product);
  }


  deleteProduct(product: Product | string): Observable<Product> {
    const id = typeof product === 'string' ? product : product.id;
    const url = `${this.productUrl}/${id}`;

    return this.http.delete<Product>(url);
  }

}
