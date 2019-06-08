import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReportService } from '../../report/report.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<any>;
  @Output() editProductEvent = new EventEmitter();
  @Output() deleteProductEvent = new EventEmitter();

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  onEditProduct(product: any) {
    this.editProductEvent.emit(product);
  }

  onDeleteProduct(product: any) {
    this.deleteProductEvent.emit(product);
  }

  trackById(index: number, product: any) {
    return product.id;
  }

}
