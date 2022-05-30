import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductItem } from 'src/app/core/interfaces/product-item.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productItem!: ProductItem;

  constructor(private route: ActivatedRoute,
    private message: NzMessageService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.route.data.subscribe(response => {
      this.productItem = response['product'];
    })
  }

  addToCart(): void {
    this.cartService.addItem(this.productItem.id, 1).subscribe({
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