import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { UtilService } from 'src/app/core/service/util.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers = [];
  selectedCustomer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (data) => {
        // this.customers = data['customers'];
        this.customers = data;
      }
    );
  }

  updateSelectedCustomer(customer = new Customer()) {
    this.selectedCustomer = customer;
  }

  onEditCustomerEvent(customer) {
    this.updateSelectedCustomer(customer);
  }
  onDeleteCustomerEvent(customer) {
    this.customerService.deleteCustomer(customer).subscribe(
      data => {
        this.getCustomers();
      }
    );
  }
  onCustomerCreateEvent(customer) {
    this.customerService.customerCreate(customer).subscribe(
      (data) => {
        this.selectedCustomer = undefined;
        this.getCustomers();
      }
    );
  }

  onCancelEvent() {
    this.selectedCustomer = undefined;
  }

}
