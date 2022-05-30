import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DeliveryComponent } from './delivery.component';

const routes: Routes = [
  { path: '', component: DeliveryComponent}
];

@NgModule({
  declarations: [DeliveryComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule
  ],
})
export class DeliveryModule {}