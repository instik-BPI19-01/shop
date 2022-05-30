import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: CartComponent},
  { path: 'order', component: OrderComponent}
];

@NgModule({
  declarations: [CartComponent, OrderComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    NzIconModule,
    NzMessageModule
  ],
})
export class CartModule {}