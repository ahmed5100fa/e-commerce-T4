import { Component, DestroyRef, inject, signal, OnInit } from '@angular/core';
import { ProductReview } from "../../components/product-review/product-review";
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { CustomButton } from '@Ui-components';
import { Carousel } from 'primeng/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'apps/ecommerce/src/app/shared/components/carousel/carousel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../Home/services/ProductService/product-service';

@Component({
  selector: 'app-productdetails',
  imports: [ProductReview, JsonPipe, CustomButton, NgOptimizedImage, Carousel, CarouselModule, CarouselComponent],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {

  //code yous
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);
  //code son

  product = signal<Product | null>(null);

  _ProductService = inject(ProductsService);

  id: string | null = null;

  router = inject(ActivatedRoute);

  getProductId() {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.id = id;

      const productData = this._ProductService.getProductById(this.id);
      this.product.set(productData ?? null);
    })
  }

  //code yous

  productsList: Product[] = [];

  // product details
  productDetails: Product = {} as Product;

  // current image
  currentImage: string = '';

  ngOnInit(): void {

    //code son
    this.getProductId();

    //code yous

    this.activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (params) => {
          this.id = params.get('id');

          if (this.id) {
            this.getProductDetailsData();
          }
        },
      });

    this.productService.getProducts().subscribe((res) => {
      this.productsList = res.products;
    });

  }

  getRatedProduct(): void {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res: any) => {
        this.productsList = res.products.slice(0, 4);
        console.log('First 4 products:', this.productsList);
      });
  }

  getProductDetailsData(): void {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res: any) => {
          const product = res.products.find((p: Product) => p._id === this.id);

          if (product) {
            this.productDetails = product;

            if (this.productDetails.images?.length) {
              this.currentImage = this.productDetails.images[0];
            }
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}