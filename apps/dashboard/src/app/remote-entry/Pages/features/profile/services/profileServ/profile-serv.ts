import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInter, User } from '../../Interfaces/profileInter/profile-inter';
import { BaseUrl } from '../../../../Shared/baseUrl/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class ProfileServ {
  http = inject(HttpClient);
  baseUrl = BaseUrl;

getProfile(data?: User): Observable<ProfileInter> {
  return this.http.put<ProfileInter>(
    `${this.baseUrl}/auth/editProfile`,
    data
  );
}

updateProfilePhoto(data: FormData) {
  return this.http.put(
    `${this.baseUrl}/auth/upload-photo`,
    data
  );
}

deleteAccount(): Observable<any> {
  return this.http.delete(`${this.baseUrl}/auth/deleteMe`)
}
}
