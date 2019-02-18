import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [StockComponent, StockListComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
