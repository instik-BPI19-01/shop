import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CategoryCatalogComponent } from './category-catalog.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';
import { NzMessageModule } from 'ng-zorro-antd/message';

const routes: Routes = [
  { 
    path: '', 
    component: CategoryCatalogComponent,
  },  
  { 
    path: ':id', 
    component: ProductDetailsComponent,
    resolve: {
      product: ProductResolver
    }
  }
];

@NgModule({
  declarations: [
    CategoryCatalogComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule,
    NzMessageModule
  ],
})
export class CategoryCatalogModule {}