import { Component, inject, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule, Carousel } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Card } from "../card/card";
import { gatAllProducts, Product } from '../../interfaces/card-product';
import { ProductService } from '../../../features/Home/services/ProductService/product-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ButtonModule, CarouselModule, Card],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {
  @ViewChild('carousel') carousel!: Carousel;

  private productService = inject(ProductService);

  products: Product[] = [];

  @Input() productsNum: number = 3;

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  prev(e: MouseEvent) { this.carousel.navBackward(e); }
  next(e: MouseEvent) { this.carousel.navForward(e); }


getProducts() {
  this.productService.getProducts().subscribe((res: gatAllProducts) => {
    this.products = [...res.products];

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  });
}

  ngOnInit() {
    this.getProducts();
  }
}
