import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() customers: Array<any>;
  @Output() editCustomerEvent = new EventEmitter();
  @Output() deleteCustomerEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditCustomer(customer: any) {
    this.editCustomerEvent.emit(customer);
  }
  onDeleteCustomer(customer: any) {
    this.deleteCustomerEvent.emit(customer);
  }

  trackById(index: number, customer: Customer) {
    return customer.id;
  }

}
