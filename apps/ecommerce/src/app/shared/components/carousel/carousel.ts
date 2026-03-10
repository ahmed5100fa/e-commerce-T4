import { Component, Input, ViewChild, signal, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule, Carousel } from 'primeng/carousel';
import { Card } from "../card/card";
import { Product } from '../../interfaces/card-product';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ButtonModule, CarouselModule, Card],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {

  @ViewChild('carousel') carousel!: Carousel;

  products = signal<Product[]>([]);

  @Input() set productsInput(value: Product[]) {
    this.products.set(value);
  }

  @Input() productsNum: number = 3;

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  prev(e: MouseEvent) {
    this.carousel.navBackward(e);
  }

  next(e: MouseEvent) {
    this.carousel.navForward(e);
  }
}
