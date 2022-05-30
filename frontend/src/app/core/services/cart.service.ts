import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { ADD_CART_ITEM, BUY_CART, CART_DATA, CLEAR_CART, MAIN } from '../api/api.const';
import { Cart } from '../interfaces/cart.interface';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getCartProductData(): Observable<Cart> {
    return this.httpClient.get<Cart>(MAIN + CART_DATA);
  }

  addItem(id: number, count: number): Observable<any> {
    return this.httpClient.post(MAIN + ADD_CART_ITEM.replace(':id', id.toString()), { count });
  }

  clearCart(): Observable<any> {
    return this.httpClient.get(MAIN + CLEAR_CART);
  }

  buyCart(): Observable<any> {
    return this.httpClient.get(MAIN + BUY_CART);
  }
}