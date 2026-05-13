import { Component, inject } from '@angular/core';
import { CartServ } from './services/cart-service/cart-serv';
import { RouterOutlet } from '@angular/router';
import { CartSummary } from "./Components/cart-summary/cart-summary";
import { SecondHeader } from "../../shared/components/secondHeader/secondHeader";
import { CarouselComponent } from "../../shared/components/carousel/carousel";
import { ProductService } from '../Home/services/ProductService/product-service';
import { Product } from '../../shared/interfaces/card-product';
import { LoadingService } from '../../shared/services/LoadingService/loading-service';
import { Spinner } from "../../shared/components/spinner/spinner";

@Component({
  selector: 'app-cart',
  imports: [
    RouterOutlet,
    CartSummary,
    SecondHeader,
    CarouselComponent,
    Spinner
  ],
  templateUrl: './Cart.html',
  styleUrl: './Cart.css',
})
export class Cart {

  cartService = inject(CartServ);
  productService = inject(ProductService);
  loadingService = inject(LoadingService);

  Products: Product[] = [];

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe();
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.Products = res.products;
    });
  }
}
