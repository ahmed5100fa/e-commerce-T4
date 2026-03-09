import { ProductService } from './../../services/ProductService/product-service';
import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { CustomButton } from '@Ui-components';
import { NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Carousel } from 'primeng/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'apps/ecommerce/src/app/shared/components/carousel/carousel';
@Component({
  selector: 'app-product-det',
  imports: [
    CustomButton,
    NgOptimizedImage,
    Carousel,
    CarouselModule,
    CarouselComponent,
  ],
  templateUrl: './product-det.html',
  styleUrl: './product-det.css',
})
export class ProductDet implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);
  productsList: Product[] = [];

  id: string | null = null;

  // product details
  productDetails: Product = {} as Product;

  // current image
  currentImage: string = '';

  ngOnInit(): void {
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

    //product rated
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

            // set first image
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
