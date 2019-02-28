import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Stock } from '../stock.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit, OnChanges {

  @Input() stock: Stock;
  @Input() products: Product[];
  @Output() stockCreateEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  form: FormGroup;
  action = 'Save';


  private datePipe = new DatePipe(navigator.language);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges() {
    if (this.stock) {
      this.action = this.stock.id ? 'Edit' : 'Save';
    }
  }
  cancel() {
    this.cancelEvent.emit();
  }
  onSubmit() {
    let stock = this.form.value as Stock;
    stock.totalPrice = stock.price * stock.quantity;
    stock.purchaseDate = new Date();
    stock = { ...this.stock, ...stock };
    this.stockCreateEvent.emit(stock);
  }

  getTotalPrice() {
    const stock = this.form.value as Stock;
    let totalPrice = 0;
    if (stock.price && stock.quantity) {
      totalPrice = stock.price * stock.quantity;
    }
    return totalPrice;
  }

  private initializeForm(): void {
    const { price, quantity, totalPrice } = this.stock;
    let productId: string;
    if (this.stock.id) {
      productId = this.stock['product']['_id'];
    }
    const currentDate = this.datePipe.transform(new Date(), 'fullDate');
    this.form = this.fb.group({
      productId: [productId, []],
      price: [price, []],
      quantity: [quantity, []],
      totalPrice: [{ value: 0, disabled: true }],
      purchaseDate: [{ value: currentDate, disabled: true }],
    });
  }



}
