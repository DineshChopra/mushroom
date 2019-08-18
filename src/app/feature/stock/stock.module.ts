import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule} from 'angular-6-datatable';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockComponent, StockListComponent, StockCreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ]
})
export class StockModule { }
