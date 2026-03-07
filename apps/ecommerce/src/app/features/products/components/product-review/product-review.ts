import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Reviews } from 'apps/ecommerce/src/app/shared/interfaces/reviews';
import { SecondHeader } from "apps/ecommerce/src/app/shared/components/secondHeader/secondHeader";

@Component({
  selector: 'app-product-review',
  imports: [SecondHeader],
  templateUrl: './product-review.html',
  styleUrl: './product-review.css',
})
export class ProductReview {
  _productService = inject(ProductsService);
  productId = input<string>('');
  reviews: Reviews[] = [];
  ngOnInit(){
    this._productService.getProductReview(this.productId()).subscribe((res:any)=>{
      this.reviews = res.reviews;
    });
}}
