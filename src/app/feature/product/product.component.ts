import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [];
  selectedProduct = undefined;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => { this.products = data; }
    );
  }
  updateSelectedProduct(procuct = new Product()) {
    this.selectedProduct = procuct;
  }
  onProductCreateEvent(product: Product) {
    this.productService.productCreate(product).subscribe(
      (data) => {
        this.selectedProduct = undefined;
        this.getProducts();
      }
    );
  }

  onEditProductEvent(product: Product) {
    this.selectedProduct = product;
    // this.onProductCreateEvent(product);
  }
  onDeleteProductEvent(product: Product) {
    this.productService.deleteProduct(product).subscribe(
      data => {
        this.getProducts();
      }
    );
  }

}
