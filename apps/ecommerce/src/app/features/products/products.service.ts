import { Injectable,inject, signal, WritableSignal } from '@angular/core';
import {gatAllProducts} from '../../shared/interfaces/card-product'
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@org/auth';
import { ReviewsResponse } from '../../shared/interfaces/reviews';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<gatAllProducts>({message:'', metadata:{currentPage:0,totalPages:0,limit:0,totalItems:0},products:[]})
  isLoading = signal(false);
  private readonly _http = inject(HttpClient);
  private readonly baseUrl = inject(BaseUrl);
  getProducts(page=0, limit=40){
    this.isLoading.set(true);
    this._http.get<gatAllProducts>(`${this.baseUrl}/products?page=${page}&limit=${limit}`).subscribe(res=>{
      this.products.set(res);
      this.isLoading.set(false);
    });
  }

  getProductReview(productId:string){
    return this._http.get<ReviewsResponse>(`${this.baseUrl}/products/${productId}/reviews`);
  }
  getProductById(productId:string){
    this.getProducts();
    return this.products().products.find(product=>product._id == productId);
  }

}