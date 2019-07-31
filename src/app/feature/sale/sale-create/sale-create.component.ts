import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Sale } from '../sale.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Product } from '../../product/product.model';
import { Customer } from '../../customer/customer.model';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent implements OnInit, OnChanges {

  @Input() sale: Sale;
  @Input() customers: Customer[];
  @Input() products: Product[];
  @Output() saleCreateEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  form: FormGroup;
  isEditMode = false;
  action = 'Save';
  customerBalance: any;
  productStock: any;

  private datePipe = new DatePipe(navigator.language);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.sale) {
      this.action = this.sale.productId ? 'Update' : 'Save';
      this.isEditMode = true;
    }
    this.initializeForm();
    /* this.setDefaultValues();
    this.updateCustomerBalance();
    this.updateProductStock(); */
  }
  ngOnChanges() {
  }
  onSubmit() {
    const sale = this.form.value;
    const { productId, customerId, quantity, price } = sale;
    let saleObj = { productId: productId, customerId: customerId, quantity, price};
    saleObj = { ...this.sale, ...saleObj };
    this.saleCreateEvent.emit(saleObj);
  }
  cancel() {
    this.cancelEvent.emit();
  }
  /* private setDefaultValues() {
    if (this.sale.productId) {
      this.setCustomerBalance(this.sale.);
      this.setProductStock(this.sale.product._id);
    }
  }
  private setCustomerBalance(customerId) {
    const customer = this.customers.find( (element: any) => {
      if (element.id === customerId) {
        return element;
      }
    });
    this.customerBalance = customer.balance;
  } */
  /* private updateCustomerBalance() {
    this.form.controls['customerId'].valueChanges.subscribe((customerId) => {
      this.setCustomerBalance(customerId);
    });
  }
  private updateProductStock() {
    this.form.controls['productId'].valueChanges.subscribe((productId) => {
      this.setProductStock(productId);
    });
  }
  private setProductStock(productId) {
    const product = this.products.find( (element: any) => {
      if (element.id === productId) {
        return element;
      }
    });
    this.productStock = product['stock'];
  } */
  private initializeForm(): void {
    const { customerId, productId, quantity, price } = this.sale;

    this.form = this.fb.group({
      customerId: [{ value: customerId }],
      productId: [productId, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      price: [price]

    });
  }

}
