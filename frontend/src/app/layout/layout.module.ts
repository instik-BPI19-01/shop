import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../pages/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('./../pages/catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./../pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'delivery',
        loadChildren: () => import('./../pages/delivery/delivery.module').then(m => m.DeliveryModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./../pages/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./../pages/news/news.module').then(m => m.NewsModule)
      },      
      {
        path: 'cart',
        loadChildren: () => import('./../pages/cart/cart.module').then(m => m.CartModule)
      },       
    ]
  } 
];

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    MainLayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzIconModule,
    NzMessageModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent
  ],
})
export class LayoutModule {}