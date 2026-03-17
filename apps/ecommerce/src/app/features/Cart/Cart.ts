import { Component, inject } from '@angular/core';
import { CartServ } from './services/cart-service/cart-serv';
import { Cartinter, CartResponse } from './interfaces/cart-Interface/cart-inter';
import { log } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './Cart.html',
  styleUrl: './Cart.css',
})
export class Cart {
   _cartItems !: CartResponse;
   private _cartService = inject(CartServ);
     subscription!: Subscription;

  ngOnInit(): void {
    this._cartService.getCartItems().subscribe({
      next: (res) => {
        this._cartItems = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

   // Life Cycle Hooks
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
