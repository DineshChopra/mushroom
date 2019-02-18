import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryCustomerDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {id: 1, name: 'Ram', phone: '100', email: 'test1@gmail.com'},
      {id: 2, name: 'Sham', phone: '100', email: 'test1@gmail.com'},
      {id: 3, name: 'Prem', phone: '100', email: 'test1@gmail.com'},
      {id: 4, name: 'Gita', phone: '100', email: 'test1@gmail.com'},
      {id: 5, name: 'Sita', phone: '100', email: 'test1@gmail.com'},
    ];
    return {customers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the customers array is empty,
  // the method below returns the initial number (11).
  // if the customers array is not empty, the method below returns the highest
  // hero id + 1.
  genId(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(hero => hero.id)) + 1 : 1;
  }
}
