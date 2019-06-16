import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {path: '', component: PurchaseComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PurchaseRoutingModule { }
 