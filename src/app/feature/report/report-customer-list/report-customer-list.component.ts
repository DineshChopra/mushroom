import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-customer-list',
  templateUrl: './report-customer-list.component.html',
  styleUrls: ['./report-customer-list.component.scss']
})
export class ReportCustomerListComponent implements OnInit {

  customers: any[] = [];
  constructor(private service: ReportService) { }

  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.service.getCustomers().subscribe(
      response => {
        this.customers = response;
      }
    );

  }
  trackById(index: number, customer: any) {
    return customer.id;
  }
}
