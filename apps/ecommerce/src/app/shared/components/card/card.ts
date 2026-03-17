import { Component, inject, Input, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/card-product';
import { Eye, HeartMinus, HeartPlus, LucideAngularModule , ShoppingCart, Star,StarHalf } from "lucide-angular";
import { RouterLink } from '@angular/router';
import { AlertComponent, NotificationService } from '@Ui-components';
import { CartServ } from '../../../features/Cart/services/cart-service/cart-serv';

export type TagSeverity =
  | 'success'
  | 'secondary'
  | 'info'
  | 'warn'
  | 'danger'
  | 'contrast';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, TagModule, RatingModule, FormsModule, CommonModule, LucideAngularModule , RouterLink , AlertComponent],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card {

  star  = Star

  readonly icons = [HeartPlus , ShoppingCart, Eye, Star, StarHalf , HeartMinus];


  // added to wish list
  addedToWishlist = signal<boolean>(true);
  @Input() product!: Product;
   _quantity: number = 1;
   private cartService = inject(CartServ);
   private readonly alertService = inject(NotificationService);
   _notifyService = inject(NotificationService);

   @Input() product_id !: string ;

  get name(): string {
    return this.product.title;
  }

  get image(): string {
    return this.product.imgCover;
  }

  get rating(): number {
    return this.product.rateAvg || 0;
  }

  get oldPrice(): number | null {
    return this.product.priceAfterDiscount < this.product.price
      ? this.product.price
      : null;
  }

  get price(): number {
    return this.product.priceAfterDiscount || this.product.price;
  }

  // ===== Stars Logic =====
  get fullStars(): number {
    return Math.floor(this.rating);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  // ===== Tags Logic =====
  get tags(): { label: string; severity: TagSeverity }[] {
    const tags: { label: string; severity: TagSeverity }[] = [];

    // New
    if (this.isNew) tags.push({ label: 'New', severity: 'info' });

    // Hot
    if (this.isHot) tags.push({ label: 'Hot', severity: 'danger' });

    // Stock status
    if (this.product.quantity < 0) {
      tags.push({ label: 'Out of Stock', severity: 'warn' });
    }
    return tags;
  }

  get isNew(): boolean {
    const createdDate = new Date(this.product.createdAt);
    const now = new Date();
    const diffInDays =
      (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  }

  get isHot(): boolean {
    return this.product.sold > 100;
  }

  get shortName(): string {
  if (!this.product.title) return '';
  const words = this.product.title.split(' ');
  return words.slice(0, 3).join(' ');
}


addToCart() {
  this.cartService.addToCart(this.product_id, this._quantity).subscribe({
    next: (response) => {
      this._notifyService.showSuccess('Product added to cart successfully!');
      console.log("sucsee");

    },
    error: (error) => {
      this._notifyService.showError('Failed to add product to cart.');
    }
  });
}


}
