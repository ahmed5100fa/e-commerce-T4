import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesResponse, IDeleteProductResponse, OccasionsResponse, specficProductResponse } from '../../interfaces/prointer';
import { BaseUrl } from '../../../../Shared/baseUrl/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class ProductServ {
  private http = inject(HttpClient);
  private baseUrl = BaseUrl;

  createProduct(data: FormData) {
    const token = localStorage.getItem('token');
    return this.http.post(
      `${this.baseUrl}/products`,
      data
    );
  }

  updateProduct(id: string, data: FormData) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `${this.baseUrl}/products/${id}`,
      data
    );
  }


  getProductById(id: string): Observable<specficProductResponse> {
    return this.http.get<specficProductResponse>(`${this.baseUrl}/products/${id}`);
  }

  deleteProduct(id: string): Observable<IDeleteProductResponse> {
    return this.http.delete<IDeleteProductResponse>(`${this.baseUrl}/products/${id}`);
  }
}
