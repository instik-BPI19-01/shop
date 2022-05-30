import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: '', component: ContactsComponent}
];

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule
  ],
})
export class ContactsModule {}