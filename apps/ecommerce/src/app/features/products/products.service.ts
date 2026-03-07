import { Injectable,inject, signal, WritableSignal } from '@angular/core';
import {gatAllProducts} from '../../shared/interfaces/card-product'
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@org/auth';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<gatAllProducts>({message:'', metadata:{currentPage:0,totalPages:0,limit:0,totalItems:0},products:[]})
  isLoading = signal(false);
  private readonly _http = inject(HttpClient);
  private readonly baseUrl = inject(BaseUrl);
  getProducts(page=0, limit=12){
    this.isLoading.set(true);
    this._http.get<gatAllProducts>(`${this.baseUrl}/products?page=${page}&limit=${limit}`).subscribe(res=>{
      this.products.set(res);
      this.isLoading.set(false);
    });
  }

  getProductReview(productId:string){
    return this._http.get(`${this.baseUrl}/products/${productId}/reviews`);
  }
  getProductById(productId:string){
    return this.products().products.find(product=>product._id === productId);
  }

}