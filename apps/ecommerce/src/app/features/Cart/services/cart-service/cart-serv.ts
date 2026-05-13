import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartResponse, CartItem, AddressesResponse } from '../../interfaces/cart-Interface/cart-inter';
import { environment } from 'apps/ecommerce/src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartServ {

  private _http = inject(HttpClient);
  private _baseUrl = environment.baseUrl;

  _cartItems = signal<CartItem[]>([]);
  totalPrice = signal<number>(0);

  // ================= GET =================
  getCartItems(): Observable<CartResponse> {
    return this._http.get<CartResponse>(`${this._baseUrl}/cart`).pipe(
      tap((res) => {
        this._cartItems.set(res.cart.cartItems);
        this.totalPrice.set(res.cart.totalPrice);
      })
    );
  }

  // ================= ADD =================
  addToCart(productId: string, quantity: number) {
    return this._http.post<CartResponse>(`${this._baseUrl}/cart`, {
      product: productId,
      quantity: quantity
    }).pipe(
      tap((res) => {
        this._cartItems.set(res.cart.cartItems);
        this.totalPrice.set(res.cart.totalPrice);
      })
    );
  }

  // ================= DELETE ITEM =================
  deleteFromCart(productId: string) {
    return this._http.delete<CartResponse>(`${this._baseUrl}/cart/${productId}`).pipe(
      tap((res) => {
        this._cartItems.set(res.cart.cartItems);
        this.totalPrice.set(res.cart.totalPrice);
      })
    );
  }

  // ================= CLEAR =================
  clearCart() {
    return this._http.delete<CartResponse>(`${this._baseUrl}/cart`).pipe(
      tap(() => {
        this._cartItems.set([]);
        this.totalPrice.set(0);
      })
    );
  }

  // ================= UPDATE =================
  UpdateCartProduct(quantity: number, productId: string) {
    return this._http.put<CartResponse>(`${this._baseUrl}/cart/${productId}`, {
      quantity
    }).pipe(
      tap((res) => {
        this._cartItems.set(res.cart.cartItems);
        this.totalPrice.set(res.cart.totalPrice);
      })
    );
  }

  // ================= LOCAL UPDATE (Optimistic UI) =================
  removeItemLocal(productId: string) {
    this._cartItems.update(items =>
      items.filter(item => item.product._id !== productId)
    );
    this.recalculateTotal();
  }

  updateItemLocal(productId: string, quantity: number) {
    this._cartItems.update(items =>
      items.map(item =>
        item.product._id === productId
          ? { ...item, quantity }
          : item
      )
    );
    this.recalculateTotal();
  }

  private recalculateTotal() {
    let total = 0;
    for (const item of this._cartItems()) {
      total += item.price * item.quantity;
    }
    this.totalPrice.set(total);
  }

  // ================= GET ALL USER ADDRESSES =================
  getUserAddresses(): Observable<AddressesResponse> {
    return this._http.get<AddressesResponse>(`${this._baseUrl}/addresses`);
  }
}
