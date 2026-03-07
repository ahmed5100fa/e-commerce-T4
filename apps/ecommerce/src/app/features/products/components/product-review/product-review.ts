import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Reviews } from 'apps/ecommerce/src/app/shared/interfaces/reviews';
import { SecondHeader } from "apps/ecommerce/src/app/shared/components/secondHeader/secondHeader";
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-review',
  imports: [SecondHeader, RatingModule, FormsModule],
  templateUrl: './product-review.html',
  styleUrl: './product-review.css',
})
export class ProductReview {
  _productService = inject(ProductsService);
  productId = input<string>('');
  reviews: Reviews[] = [];
  generalRating: number = 0.0;
  ngOnInit(){
    this._productService.getProductReview(this.productId()).subscribe((res:any)=>{
      this.reviews = res.reviews;
      // Calculate general rating
      if (this.reviews.length > 0) {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        this.generalRating = totalRating / this.reviews.length;
      }
    });
}}
