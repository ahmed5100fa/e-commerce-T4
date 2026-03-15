import { Component, inject } from '@angular/core';
import { CartServ } from './services/cart-service/cart-serv';
import { Cartinter, CartResponse } from './interfaces/cart-Interface/cart-inter';
import { log } from 'console';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './Cart.html',
  styleUrl: './Cart.css',
})
export class Cart {
   _cartItems !: CartResponse;
   private _cartService = inject(CartServ);
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
}
