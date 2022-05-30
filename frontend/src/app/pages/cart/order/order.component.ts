import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {  
  public orderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.buildForms();
  }

  buildForms(): void {
    this.orderForm = this.formBuilder.group({
      country: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      index: ['', [
        Validators.required
      ]],
      payment: ['', [
        Validators.required
      ]]       
    });
  }

  submitOrder(): void {
    this.emptyCart();
    this.router.navigate(['../']);
    this.createMessage('success', 'Заказ оформлен!');
  }

  createMessage(type: string, text: string): void {
    this.message.create(type, text);
  }

  emptyCart(): void {
    this.cartService.buyCart().subscribe();
  }
}
