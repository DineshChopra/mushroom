import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule} from 'angular-6-datatable';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportCustomerListComponent } from './report-customer-list/report-customer-list.component';
import { ReportProductListComponent } from './report-product-list/report-product-list.component';
import { ReportPurchaseListComponent } from './report-purchase-list/report-purchase-list.component';
import { ReportStockListComponent } from './report-stock-list/report-stock-list.component';
import { ReportSaleListComponent } from './report-sale-list/report-sale-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
                  ReportComponent,
                  ReportCustomerListComponent,
                  ReportProductListComponent,
                  ReportPurchaseListComponent,
                  ReportStockListComponent,
                  ReportSaleListComponent,
                ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  exports: [
    ReportCustomerListComponent,
    ReportProductListComponent,
    ReportPurchaseListComponent,
    ReportStockListComponent,
    ReportSaleListComponent,
  ]
})
export class ReportModule { }
