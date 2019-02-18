import { Component, OnInit } from '@angular/core';
import { products } from './product.data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = products;
  selectedProduct = undefined;
  constructor() { }

  ngOnInit() {
  }
  updateSelectedProduct() {
    this.selectedProduct = {};
  }
  onProductCreateEvent() {
    
  }

}
