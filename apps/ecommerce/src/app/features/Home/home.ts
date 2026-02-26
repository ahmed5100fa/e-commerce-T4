import { Component, inject } from '@angular/core';
import { Navbar } from "../../layouts/main layout/navbar/navbar";
import { BestSelling } from "./components/best-selling/best-selling";
import { ProductService } from './services/ProductService/product-service';
import { gatAllProducts, Product } from '../../shared/interfaces/card-product';

@Component({
  selector: 'home-page',
  imports: [Navbar, BestSelling],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {

   products: Product[] = [];

  private productService = inject(ProductService);

  getProducts() {
  this.productService.getProducts().subscribe((res: gatAllProducts) => {
    this.products = [...res.products];

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  });
}

  ngOnInit() {
    this.getProducts();
  }


}
