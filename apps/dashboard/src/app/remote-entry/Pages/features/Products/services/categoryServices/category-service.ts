import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesResponse } from '../../interfaces/prointer';
import { BaseUrl } from '../../../../Shared/baseUrl/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private baseUrl = BaseUrl;

      getCategories(): Observable<CategoriesResponse> {
        return this.http.get<CategoriesResponse>(`${this.baseUrl}/categories`);
      }
}
