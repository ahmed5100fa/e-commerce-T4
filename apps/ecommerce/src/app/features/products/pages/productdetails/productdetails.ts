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
id :string= ''
router = inject(ActivatedRoute)
ngOnInit(){
this.getProductId();
}
getProductId(){
  this.router.paramMap.subscribe(params =>{
    const id = params.get('id') ?? '';
    this.id=id;
    const productData = this._ProductService.getProductById(this.id);
    this.product.set(productData ?? null);
  })
}
}
