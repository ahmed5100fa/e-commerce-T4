import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OccasionsResponse } from '../../interfaces/prointer';
import { BaseUrl } from '../../../../Shared/baseUrl/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OccasionService {
    private http = inject(HttpClient);
    private baseUrl = BaseUrl;
    getOccasions(): Observable<OccasionsResponse> {
    return this.http.get<OccasionsResponse>(`${this.baseUrl}/occasions`);
  }
}
