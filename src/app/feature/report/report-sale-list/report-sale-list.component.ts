import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-sale-list',
  templateUrl: './report-sale-list.component.html',
  styleUrls: ['./report-sale-list.component.scss']
})
export class ReportSaleListComponent implements OnInit {
  sales: any;
  products: any;
  customers: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: ReportService) { }

  ngOnInit() {
    this.initializeForm();
    this.getData();
  }

  onSubmit() {
    const searchCondition = this.form.value;
    const { endDate } = searchCondition;
    searchCondition.endDate = this.getEndDate(endDate);
    this.getSales(searchCondition);
  }

  private getEndDate(date: string): string {
    if (date) {
      return date + ' 23:59:59';
    } else {
      return date;
    }
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      customer: ['', [Validators.required]],
      product: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  private getData() {
    this.getSales();
    this.getProducts();
    this.getCustomers();
  }

  private getSales(searchCondition = {}) {
    this.sales = this.service.getSales(searchCondition);
  }
  private getProducts() {
    this.service.getProducts().subscribe(
      response => this.products = response
    );
  }
  private getCustomers() {
    this.service.getCustomers().subscribe(
      response => this.customers = response
    );
  }

}
