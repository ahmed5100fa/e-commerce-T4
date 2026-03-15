import { Component, Input, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/card-product';
import { LucideAngularModule , Star,StarHalf , HeartPlus, ShoppingCart, Eye, HeartMinus } from "lucide-angular";

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
  imports: [CardModule, TagModule, RatingModule, FormsModule, CommonModule, LucideAngularModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card {

  star  = Star

  readonly icons = [HeartPlus , ShoppingCart, Eye, Star, StarHalf , HeartMinus];


  // added to wish list
  addedToWishlist = signal<boolean>(true);
  @Input() product!: Product;

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

}
