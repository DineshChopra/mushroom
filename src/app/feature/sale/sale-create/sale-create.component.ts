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
  action = 'Save';

  private datePipe = new DatePipe(navigator.language);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges() {
    if (this.sale) {
      this.action = this.sale._id ? 'Edit' : 'Save';
    }
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
      productId: [productId, [Validators.required]],
      customerId: [customerId, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      salePrice: [salePrice],
      totalPrice: [{value: totalPrice, disabled: true}],
      amountRecieved: [amountRecieved],
      balance: [{value: balance, disabled: true}],
      saleDate: [currentDate],
    });
  }

}
