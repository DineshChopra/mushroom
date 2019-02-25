import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MushroomHttpInterceptor } from './interceptor/mushroom-http.interceptor';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MushroomHttpInterceptor, multi: true}
  ]
})
export class CoreModule { }
