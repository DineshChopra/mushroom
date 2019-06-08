import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-product-list',
  templateUrl: './report-product-list.component.html',
  styleUrls: ['./report-product-list.component.scss']
})
export class ReportProductListComponent implements OnInit {
  products: any;
  constructor(private service: ReportService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = this.service.getProducts();
  }

  trackById(index: number, product: any) {
    return product.id;
  }


}
