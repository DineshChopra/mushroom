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
      this.action = this.sale._id ? 'Edit' : 'Save';
      this.isEditMode = true;
    }
    this.initializeForm();
    this.setDefaultValues();
    this.updateCustomerBalance();
    this.updateProductStock();
  }
  ngOnChanges() {
  }
  onSubmit() {
    const sale = this.form.value;
    const {productId, customerId, quantity, salePrice, amountRecieved, saleDate} = sale;
    const totalPrice = quantity * salePrice;
    const balance = totalPrice - amountRecieved;
    let saleObj = {product: productId, customer: customerId, quantity, salePrice, totalPrice, amountRecieved, balance, saleDate};
    saleObj.saleDate = new Date();
    saleObj = { ...this.sale, ...saleObj };
    this.saleCreateEvent.emit(saleObj);
  }
  cancel() {
    this.cancelEvent.emit();
  }
  private setDefaultValues() {
    if (this.sale._id) {
      this.setCustomerBalance(this.sale.customer._id);
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
  }
  private updateCustomerBalance() {
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
  }
  private initializeForm(): void {
    const { quantity, salePrice, amountRecieved   } = this.sale;
    let { totalPrice, balance } = this.sale;
    const currentDate = this.datePipe.transform(new Date(), 'fullDate');
    let productId: string, customerId: string;
    if (this.sale._id) {
      productId = this.sale.product._id;
      customerId = this.sale.customer._id;
    } else {
      totalPrice = 0;
      balance = 0;
    }
    this.form = this.fb.group({
      customerId: [{value: customerId, disabled: this.isEditMode}],
      productId: [productId, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      salePrice: [salePrice],
      totalPrice: [{value: totalPrice, disabled: true}],
      amountRecieved: [amountRecieved],
      balance: [{value: balance, disabled: true}],
      saleDate: [currentDate],
    });
  }

}
