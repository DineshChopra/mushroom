import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableModule} from 'angular-6-datatable';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

@NgModule({
  declarations: [CustomerComponent, CustomerListComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ]
})
export class CustomerModule { }
