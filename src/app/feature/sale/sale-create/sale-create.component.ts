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
  @Input() stocks: Product[];
  @Output() saleCreateEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  form: FormGroup;
  isEditMode = false;
  action = 'Save';
  customerBalance: any;
  productStock: any;
  selectedCustomer: any;
  selectedProduct: any;

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
    let saleObj = this.form.value;
    saleObj.totalSalePrice = saleObj.salePrice * saleObj.quantity;
    saleObj.balance = saleObj.totalSalePrice - saleObj.amontReceived;

    console.log('saleObj  --- ', saleObj);
    // const { productId, customerId, quantity, salePrice, amontReceived, balance } = sale;
    // let saleObj = { productId: productId, customerId: customerId, quantity, salePrice, amontReceived, balance};
    saleObj = { ...this.sale, ...saleObj };
    this.saleCreateEvent.emit(saleObj);
  }
  selectCustomer() {
    const customerId = this.form.value.customerId;
    const customer = this.customers.find((customer: any) => {
      if(customer.id == customerId) {
        return customer;
      }
    });
    this.selectedCustomer = customer;
    console.log('customer --- ', customer);
  }
  selectProduct() {
    const productId = this.form.value.productId;
    const product = this.stocks.find((product: any) => {
      if(product.id == productId) {
        return productId;
      }
    });
    this.selectedProduct = product;
    console.log('product --- ', product);
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
    const { customerId, productId, quantity, salePrice, totalSalePrice, amontReceived, balance } = this.sale;

    this.form = this.fb.group({
      customerId: [{ value: customerId }],
      productId: [productId, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      salePrice: [salePrice],
      totalSalePrice : [totalSalePrice],
      amontReceived: [amontReceived],
      balance: [balance]
    });
  }

}
