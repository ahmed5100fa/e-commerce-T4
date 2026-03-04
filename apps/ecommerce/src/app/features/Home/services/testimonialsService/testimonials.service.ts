import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ecommerce/src/app/environments/environment';
import { Observable } from 'rxjs';
import { ITestimonials } from 'apps/ecommerce/src/app/shared/interfaces/testimonials.interface';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  private http = inject(HttpClient);
  // Get Testmionials
  getTestmioinals(): Observable<ITestimonials> {
    return this.http.get<ITestimonials>(`${environment.baseUrl}/testimonials`);
  }
}
