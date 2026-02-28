import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-special-gifts-card',
  imports: [TagModule , CommonModule],
  templateUrl: './special-gifts-card.html',
  styleUrl: './special-gifts-card.css',
})
export class SpecialGiftsCard {
  // Use individual inputs instead of a product object
  @Input() image!: string;
  @Input() title!: string;
  @Input() label?: string;
}
