import { Component, inject, signal } from '@angular/core';
import { ProductReview } from "../../components/product-review/product-review";
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-productdetails',
  imports: [ProductReview, JsonPipe],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
product = signal<Product | null>(null);

_ProductService= inject(ProductsService);
id :any= ''
router = inject(ActivatedRoute)
ngOnInit(){
  this.product.set(this._ProductService.getProductById(this.router.snapshot.paramMap.get('id')??'') as Product);
  this.id = this.router.snapshot.paramMap.get('id');
}
}
