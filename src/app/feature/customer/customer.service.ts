import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from './customer.model';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customersUrl =  environment.apiBaseUrl +  'customers';  // URL to web api

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.customersUrl)
                    .pipe(
                      map( data => {
                        return data.map(customer => {
                          const {name, phone, email} = customer;
                          const id = customer._id;
                          return {
                            id, name, phone, email
                          };
                        });
                      })
                    );
  }
  customerCreate(customer) {
    if (customer.id) {
      return this.updateCustomer(customer);
    } else {
      return this.addCustomer(customer);
    }
  }

  /** POST: add a new customer to the server */
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
  }
    /** PUT: update the customer on the server */
  updateCustomer(customer: Customer): Observable<any> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.put(url, customer, httpOptions);
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer(customer: Customer | string): Observable<Customer> {
    const id = typeof customer === 'string' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }



}
