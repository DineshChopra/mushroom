import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit, OnChanges {

  @Input() product: Product;
  @Output() productCreateEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  form: FormGroup;

  action = 'Save';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges() {
    if (this.product) {
      this.action = this.product.id ? 'Edit' : 'Save';
    }
  }

  cancel() {
    this.cancelEvent.emit();
  }
  onSubmit() {
    let product = this.form.value as Product;
    product = {...this.product, ...product};
    this.productCreateEvent.emit(product);
  }

  private initializeForm(): void {
    const {name, productType} = this.product;
    this.form = this.fb.group({
      name: [name, [Validators.required]],
      productType: [productType, [Validators.required]],
    });
  }

}
