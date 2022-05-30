import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMessageModule } from 'ng-zorro-antd/message';

const routes: Routes = [
  { path: '', component: AuthorizationComponent }
];

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzMessageModule
  ],
  exports: [RouterModule],
})
export class AuthorizationModule {}