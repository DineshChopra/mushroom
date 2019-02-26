import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MushroomHttpInterceptor } from './interceptor/mushroom-http.interceptor';
import { UpdateRequestResponseHttpInterceptor } from './interceptor/update-request-response-http.interceptor';
import { FooterComponent } from './footer/footer.component';

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
    {provide: HTTP_INTERCEPTORS, useClass: MushroomHttpInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: UpdateRequestResponseHttpInterceptor, multi: true}
  ]
})
export class CoreModule { }
