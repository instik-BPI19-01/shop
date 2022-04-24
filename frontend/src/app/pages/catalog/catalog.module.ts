import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

const routes: Routes = [
  { path: '', component: CatalogComponent}
];

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule
  ],
})
export class CatalogModule {}