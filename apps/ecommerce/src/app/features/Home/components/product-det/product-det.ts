import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/ProductService/product-service';
import {
  Metadata,
  Product,
} from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { CustomButton } from '@Ui-components';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-det',
  imports: [CustomButton, NgOptimizedImage],
  templateUrl: './product-det.html',
  styleUrl: './product-det.css',
})
export class ProductDet implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  id: string | null = null;
  //create interface for product details and use it instead of object!!
  productDetails: Product = {} as Product;

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
  }

  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('id'));
        this.id = params.get('id');
      },
    });
  }

  getProductDetailsData(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        console.log(res.metadata);
        const product = res.products.find((p: Product) => p._id === this.id);
        if (product) {
          this.productDetails = product;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
