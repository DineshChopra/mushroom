import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule} from 'angular-6-datatable';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ]
})
export class ProductModule { }
