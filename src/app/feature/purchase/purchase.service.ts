import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PurchaseModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private readonly getpurchaseUrl = 'purchase';
  private readonly getProductUrl = 'product';
  constructor(private _httpClient: HttpClient) { }

  getPurchase(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.getpurchaseUrl).pipe(
      map(purchase => {
        return purchase['data'].map(data => {
          const { id, productId, productName, quantity, price, totalPrice } = data;
          return { id, productId, productName, quantity, price, totalPrice };
        });
      })
    );
  }
  getProducts(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.getProductUrl)
      .pipe(
        map(data => {
          return data['data'].map(product => {
            const { name, id } = product;
            return {
              id, name
            };
          });
        })
      );
  }
  perchaseCreate(product) {
    if (product.id) {
      return this.updatePurchase(product);
    } else {
      return this.addPurchase(product);
    }
  }
  addPurchase(purchase:PurchaseModel): Observable<PurchaseModel> {
    return this._httpClient.post<PurchaseModel>(this.getpurchaseUrl, purchase);
  }
  updatePurchase(purchase: PurchaseModel): Observable<any> {
    const url = `${this.getpurchaseUrl}/${purchase.id}`;
    return this._httpClient.put(url, purchase);
  }
  deletePurchase(purchase: PurchaseModel): Observable<PurchaseModel> {
    const url = `${this.getpurchaseUrl}/${purchase.id}`;

    return this._httpClient.delete<PurchaseModel>(this.getpurchaseUrl);
  }
}
