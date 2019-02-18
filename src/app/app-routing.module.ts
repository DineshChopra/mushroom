import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'customer', loadChildren: './feature/customer/customer.module#CustomerModule'},
  {path: 'product', loadChildren: './feature/product/product.module#ProductModule'},
  {path: 'report', loadChildren: './feature/report/report.module#ReportModule'},
  {path: 'sale', loadChildren: './feature/sale/sale.module#SaleModule'},
  {path: 'stock', loadChildren: './feature/stock/stock.module#StockModule'},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
