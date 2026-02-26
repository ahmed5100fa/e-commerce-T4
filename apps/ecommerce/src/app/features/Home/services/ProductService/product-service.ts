import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { gatAllProducts } from 'apps/ecommerce/src/app/shared/interfaces/card-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  getProducts():Observable<gatAllProducts> {
    return this.http.get<gatAllProducts>('https://flower.elevateegy.com/api/v1/products');
  }
}
