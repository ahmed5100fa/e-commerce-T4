import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartResponse } from '../../interfaces/cart-Interface/cart-inter';
import { BaseUrl } from '@org/auth';
import { environment } from 'apps/ecommerce/src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartServ {
  private _http = inject(HttpClient);
  _baseUrl = environment.baseUrl;


  getCartItems(): Observable<CartResponse> {
    return this._http.get<CartResponse>(`${this._baseUrl}/cart`);
  }

  addToCart(productId: string, quantity: number){
    return this._http.post(`${this._baseUrl}/cart`, {
      product: productId,
      quantity: quantity
    });
  }

  deleteFromCart(productId: string){
    return this._http.delete(`${this._baseUrl}/cart/${productId}`);
  }

  clearCart(){
    return this._http.delete(`${this._baseUrl}/cart`)
  }

  UpdateCartProduct(quantity: number, productId: string) {
  return this._http.put(`${this._baseUrl}/cart/${productId}`, {
    quantity
  });
}
}
