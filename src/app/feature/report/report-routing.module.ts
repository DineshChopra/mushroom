import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ReportCustomerListComponent } from './report-customer-list/report-customer-list.component';
import { ReportProductListComponent } from './report-product-list/report-product-list.component';
import { ReportPurchaseListComponent } from './report-purchase-list/report-purchase-list.component';
import { ReportStockListComponent } from './report-stock-list/report-stock-list.component';
import { ReportSaleListComponent } from './report-sale-list/report-sale-list.component';

const routes: Routes = [
  {path: '', component: ReportComponent, children: [
    {path: 'customer', component: ReportCustomerListComponent},
    {path: 'product', component: ReportProductListComponent},
    {path: 'purchase', component: ReportPurchaseListComponent},
    {path: 'stock', component: ReportStockListComponent},
    {path: 'sale', component: ReportSaleListComponent},
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
