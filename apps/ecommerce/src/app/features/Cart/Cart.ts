import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CartServ } from './services/cart-service/cart-serv';
import { CartInter, CartItem, CartResponse } from './interfaces/cart-Interface/cart-inter';
import { log } from 'console';
import { BrushCleaning, LucideAngularModule, MoveLeft, Trash2 } from "lucide-angular";
import { CartCard } from "./Components/cart-card/cart-card";
import { CartSummary } from "./Components/cart-summary/cart-summary";
import { SecondHeader } from "../../shared/components/secondHeader/secondHeader";
import { CarouselComponent } from "../../shared/components/carousel/carousel";
import { Product } from '../../shared/interfaces/card-product';
import { LoadingService } from '../../shared/services/LoadingService/loading-service';
import { ProductService } from '../Home/services/ProductService/product-service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Spinner } from "../../shared/components/spinner/spinner";

@Component({
  selector: 'app-cart',
  imports: [CartCard, LucideAngularModule, CartSummary, SecondHeader, CarouselComponent, RouterLink, Spinner],
  templateUrl: './Cart.html',
  styleUrl: './Cart.css',
})
export class Cart {
  icons= [BrushCleaning , Trash2 , MoveLeft];
  _cartItems = signal<CartItem[]>([]);
   Products: Product[] = [];
   TotalPrice = signal<number>(0);
   numOfCartItems = signal<number>(0);
   private _cartService = inject(CartServ);
   private cdr = inject(ChangeDetectorRef);
   private productService = inject(ProductService);
   loadingService = inject(LoadingService);
  subscription!: Subscription;

  getCartItem(){
    this._cartService.getCartItems().subscribe({
      next: (res) => {
        this._cartItems.set(res.cart.cartItems) ;
        this.TotalPrice.set(res.cart.totalPrice);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe((res) => {
      this.Products = res.products;
      this.cdr.detectChanges();
    });
  }

clearCart(){
  this._cartService.clearCart().subscribe({
    next : () => {
      this._cartItems.set([]);
      this.TotalPrice.set(0);
      this.numOfCartItems.set(0);
    }
  })
}


  ngOnInit(): void {
    this.getCartItem();
    this.getProducts();
  }

  // Life Cycle Hooks
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
