import { Component, inject } from '@angular/core';
import { CartServ } from '../../services/cart-service/cart-serv';
import { CartCard } from "../cart-card/cart-card";
import { LucideAngularModule, BrushCleaning, MoveLeft, Trash2 } from "lucide-angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-carts',
  imports: [CartCard, LucideAngularModule, RouterLink],
  templateUrl: './main-carts.html',
  styleUrl: './main-carts.css',
})
export class MainCarts {

  cartService = inject(CartServ);

  icons = [BrushCleaning, Trash2, MoveLeft];

  clearCart() {
    this.cartService.clearCart().subscribe();
  }

  handleItemDeleted(productId: string) {
    this.cartService.deleteFromCart(productId).subscribe();
  }

  handleItemUpdated(event: { quantity: number; productId: string }) {
    this.cartService.UpdateCartProduct(event.quantity, event.productId).subscribe();
  }
}
