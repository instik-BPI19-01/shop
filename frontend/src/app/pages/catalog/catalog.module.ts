import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CategoryCatalogComponent } from './category-catalog/category-catalog.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProductItemComponent } from './category-catalog/product-item/product-item.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';

const routes: Routes = [
  { 
    path: '', 
    component: CatalogComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('./category-catalog/category-catalog.module').then(m => m.CategoryCatalogModule)
  }
];

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzMessageModule
  ],
})
export class CatalogModule {}