import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

import { CATEGORY_ITEM, CATEGORY_LIST, MAIN, PRODUCT_ITEM, PRODUCT_LIST } from '../api/api.const';
import { CategoryItem } from '../interfaces/category-item.interface';
import { ProductItem } from '../interfaces/product-item.interface';


@Injectable({
  providedIn: 'root',
})
export class CatalogDataService {
  constructor(private httpClient: HttpClient) {}

  getCategoryList(): Observable<CategoryItem[]> {
    return this.httpClient.get<CategoryItem[]>(MAIN + CATEGORY_LIST);
  }

  getCategory(id: number): Observable<CategoryItem> {
    return this.httpClient.get<CategoryItem>(MAIN + CATEGORY_ITEM.replace(':id', id.toString()));
  }

  getProductList(categoryId: number): Observable<ProductItem[]> {
    let params = new HttpParams();
    params = params.set('category', categoryId.toString());
    
    return this.httpClient.get<ProductItem[]>(MAIN + PRODUCT_LIST, {params});
  }

  getProductItem(id: number): Observable<ProductItem> {
    return this.httpClient.get<ProductItem>(MAIN + PRODUCT_ITEM.replace(':id', id.toString()));
  }
}