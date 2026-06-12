import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesResponse, OccasionsResponse } from '../../interfaces/prointer';
import { BaseUrl } from '../../../../Shared/baseUrl/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class ProServ {
  private http = inject(HttpClient);
  private baseUrl = BaseUrl;

  createProduct(data: FormData) {
    const token = localStorage.getItem('token');
    return this.http.post(
      `${this.baseUrl}/products`,
      data,{
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    );
  }

  updateProduct(id: string, data: FormData) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `${this.baseUrl}/products/${id}`,
      data,{
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    );
  }

  getOccasions(): Observable<OccasionsResponse> {
    return this.http.get<OccasionsResponse>('https://flower.elevateegy.com/api/v1/occasions');
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>('https://flower.elevateegy.com/api/v1/categories');
  }
}
