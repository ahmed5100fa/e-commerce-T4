import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export type TagSeverity =
  | 'success'
  | 'secondary'
  | 'info'
  | 'warn'
  | 'danger'
  | 'contrast';

export interface Product {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  tagLabel?: string;
  tagSeverity?: TagSeverity;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, TagModule, RatingModule, FormsModule , CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card {

   get fullStars(): number {
    return Math.floor(this.rating);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
    @Input() product!: Product;
    @Input() rating: number = 3.5;


}
