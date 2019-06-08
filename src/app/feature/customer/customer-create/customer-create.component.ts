import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit, OnChanges {

  @Input() customer: Customer;
  @Output() customerCreateEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  form: FormGroup;

  action: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges() {
    if (this.customer) {
      this.action = this.customer.id ? 'Edit' : 'Save';

    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  cancel() {
    this.cancelEvent.emit();
  }
  onSubmit() {
    let customer = this.form.value as Customer;
    customer = {...this.customer, ...customer};
    console.log('customer --- ', customer);
    this.customerCreateEvent.emit(customer);
  }
  private initializeForm(): void {
    const {name, phone, email} = this.customer;
    this.form = this.fb.group({
      name: [name, [Validators.required]],
      phone: [phone, [Validators.required]],
      email: [email, [Validators.required]],
    });
  }
  private customerCreate() {
    this.customerCreateEvent.emit(this.customer);
  }

}
