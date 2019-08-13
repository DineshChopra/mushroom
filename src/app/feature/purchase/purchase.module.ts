import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import  { DataTableModule} from 'angular-6-datatable';
import { PurchaseComponent } from './purchase.component';
import { PurchaseCreateComponent } from './purchase-create/purchase-create.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { ReportModule } from '../report/report.module';


@NgModule({
  declarations: [PurchaseComponent, PurchaseCreateComponent, PurchaseListComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ReactiveFormsModule,
    DataTableModule,
    ReportModule
  ]
})
export class PurchaseModule { }
