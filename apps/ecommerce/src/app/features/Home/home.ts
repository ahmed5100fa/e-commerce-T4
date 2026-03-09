import { Component, inject } from '@angular/core';
import { AboutUs } from './components/about-us/about-us';
import { SpecialGiftsCard } from "../../shared/components/special-gifts-card/special-gifts-card";
import { FeatureBar } from "./components/feature bar/feature-bar";
import { BestSelling } from "./components/best-selling/best-selling";
import { TrustedBy } from "./components/trusted-by/trusted-by";
import { Product } from '../../shared/interfaces/card-product';
import { ProductService } from './services/ProductService/product-service';
import { MostPopularSection } from "./components/Most Popular/most-popular";
import { TestimonialsSection } from "./components/Testimonials/testimonials";
import { SpecialGiftsComponent } from "./components/special gifts/special-gifts";
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SpecialGiftsCard, FeatureBar, BestSelling, TrustedBy, MostPopularSection, TestimonialsSection, SpecialGiftsComponent, AboutUs],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {
  Products !: Product[];

  private productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.Products = res.products;
    });
  }

}
