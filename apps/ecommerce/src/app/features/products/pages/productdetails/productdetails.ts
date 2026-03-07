import { Component, inject, input, signal } from '@angular/core';
import { ProductReview } from "../../components/product-review/product-review";
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Route } from 'node_modules/@angular/router/types/_router_module-chunk';
import { Router } from 'express';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-productdetails',
  imports: [ProductReview, JsonPipe],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
product = signal<Product>({} as Product);

_ProductService= inject(ProductsService);
constructor(route:ActivatedRoute, private router:Router){
  this.product.set(this._ProductService.getProductById(route.snapshot.paramMap.get('id')??'') as Product);
}

}
