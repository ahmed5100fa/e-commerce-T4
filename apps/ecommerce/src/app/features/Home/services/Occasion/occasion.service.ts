import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'apps/ecommerce/src/app/environments/environment';
import { IOccasion } from 'apps/ecommerce/src/app/shared/interfaces/occasions.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OccasionService {
  private http = inject(HttpClient);

  getOccasions(): Observable<IOccasion> {
    return this.http.get<IOccasion>(`${environment.baseUrl}/occasions`);
  }
}
