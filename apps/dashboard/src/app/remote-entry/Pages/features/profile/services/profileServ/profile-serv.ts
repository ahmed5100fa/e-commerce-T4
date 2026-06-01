import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseUrl } from './../../../../../../../../../../libs/auth/src/lib/enums/authEndPointsToken';
import { Observable } from 'rxjs';
import { ProfileInter, User } from '../../Interfaces/profileInter/profile-inter';

@Injectable({
  providedIn: 'root',
})
export class ProfileServ {
  http = inject(HttpClient);
  baseUrl = "https://flower.elevateegy.com/api/v1";

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
}
