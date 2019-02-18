import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<any>;
  @Output() editProductEvent = new EventEmitter();
  @Output() deleteProductEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditProduct(product: any) {
    this.editProductEvent.emit();
  }

  onDeleteProduct(product: any) {
    this.deleteProductEvent.emit();
  }

}
