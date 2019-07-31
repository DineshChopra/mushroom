import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule} from 'angular-6-datatable';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SaleComponent, SaleListComponent, SaleCreateComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ]
})
export class SaleModule { }
