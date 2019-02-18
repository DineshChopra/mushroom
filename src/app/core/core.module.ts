import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
