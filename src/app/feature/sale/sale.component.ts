import { Component, OnInit } from '@angular/core';
import { Sale } from './sale.model';
import { SaleService } from './sale.service';
import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';
import { forkJoin } from 'rxjs';
import { ReportService } from '../report/report.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  selectedSale: Sale;
  sales: Sale[];
  customers: Customer[];
  products: Product[];

  constructor(private saleService: SaleService,
              private reportService: ReportService) { }

  ngOnInit() {
    this.getSales();
  }
  updateSelectedSale(sale = new Sale()) {
    // this.selectedSale = sale;
    this.getProductCustomerData(sale);
    // this.getCustomers();
    // this.getProducts();
  }
  getSales() {
    this.saleService.getSales().subscribe(
      (salesData) => {
        this.sales = salesData;
      });
  }
  getProductCustomerData(sale: Sale) {
    this.getCustomers();
    this.getProducts();
    this.selectedSale = sale;

    // forkJoin(
    //   this.customerService.getCustomers(),
    //   this.productService.getProducts()
    // ).subscribe(([customerData, productData]) => {
    //   this.customers = customerData;
    //   this.products = productData;
    //   this.selectedSale = sale;
    // });
  }
  getCustomers() {
    this.reportService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
  getProducts() {
    this.reportService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  onEditSaleEvent(sale: Sale) {
    this.updateSelectedSale(sale);
  }
  onDeleteSaleEvent(sale: Sale) {
    this.saleService.deleteSale(sale).subscribe(() => {
      this.getSales();
    });
  }
  onCancelEvent() {
    this.selectedSale = undefined;
  }
  onSaleCreateEvent(sale: Sale) {
    this.saleService.saleCreate(sale).subscribe(() => {
      this.getSales();
      this.selectedSale = undefined;
    });
  }

}
