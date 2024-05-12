import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
})
export class CartTotalComponent {

  private cartSvc = inject(CartService)

  cartItems = this.cartSvc.cartItems;

  subTotal = this.cartSvc.subTotal;
  deliveryFee = this.cartSvc.deliveryFee;
  tax = this.cartSvc.deliveryFee;
  totalPrice = this.cartSvc.totalPrice;
}
