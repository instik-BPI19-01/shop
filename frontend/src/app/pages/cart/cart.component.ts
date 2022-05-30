import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit { 
  cartItemList: CartItem[] = [];
  fullCost: number = 0;

  constructor(private message: NzMessageService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItemList();    
  }

  getCartItemList(): void {
    this.cartService.getCartProductData().subscribe(data => {
      this.fullCost = data.full_cost;
      this.cartItemList = data.items;
    });
  }

  deleteItem(): void {
  }

  emptyCart(): void {
    this.cartService.clearCart().subscribe(() => {
      this.getCartItemList();
      this.createMessage('success', 'Корзина очищена!');
    });
  }

  createMessage(type: string, text: string): void {
    this.message.create(type, text);
  }
}
