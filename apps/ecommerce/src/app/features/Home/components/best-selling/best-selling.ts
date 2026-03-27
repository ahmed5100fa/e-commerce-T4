import { Component, inject, input, Input } from '@angular/core';
import { CarouselComponent } from "apps/ecommerce/src/app/shared/components/carousel/carousel";
import { Product } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { MainHeader } from "apps/ecommerce/src/app/shared/components/mainHeader/mainHeader";
import { CustomButton } from "@Ui-components";
import { ProductService } from '../../services/ProductService/product-service';

@Component({
  selector: 'app-best-selling',
  imports: [CarouselComponent, MainHeader, CustomButton],
  templateUrl: './best-selling.html',
  styleUrl: './best-selling.css',
})
export class BestSelling {
  @Input() products: Product[] = [];
}
