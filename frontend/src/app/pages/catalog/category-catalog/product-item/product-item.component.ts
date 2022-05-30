import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductItem } from 'src/app/core/interfaces/product-item.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: ProductItem;

  constructor(private message: NzMessageService,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(id: number): void {    
    this.cartService.addItem(id, 1).subscribe({
      next: () => {
        this.createMessage('success', 'Товар добавлен в корзину!');
      },
      error: () => {
        this.createMessage('error', "Ошибка добавления!");
      }
    });
  }

  createMessage(type: string, text: string): void {
    this.message.create(type, text);
  }
}
