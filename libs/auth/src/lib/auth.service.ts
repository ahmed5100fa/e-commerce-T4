import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { Observable } from 'rxjs/internal/Observable';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { AuthApiAdaptor, AuthAdapted } from './interfaces/adaptor';
import { map } from 'rxjs/internal/operators/map';
import * as authData from './interfaces/auth-data';
import { BaseUrl } from './enums/authEndPointsToken';
@Injectable({
  providedIn: 'root',
})
export class AuthLibraryService implements AuthApi {
  _httpClient = inject(HttpClient);
  _AuthApiAdaptorService = inject(AuthApiAdaptorService);
  _baseUrl = inject(BaseUrl);




  login(data:authData.loginData): Observable<AuthApiAdaptor> {
    return this._httpClient.post<AuthAdapted>(`${this._baseUrl}/${AuthEndPoint.LOGIN}`, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res))
  );
  }

  register(data: authData.registerData): Observable<AuthApiAdaptor> {
    return this._httpClient.post<AuthAdapted>(`${this._baseUrl}/${AuthEndPoint.REGISTER}`, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res)));
  }

 forgotPassword(data: authData.forgetPasswordPasswordData): Observable<number> {
    return this._httpClient.post<AuthAdapted>(`${this._baseUrl}/${AuthEndPoint.FORGOT_PASSWORD}`, data, {observe: 'response'}).pipe(map(res=>res.status),
    );
}

  verifyResetCode(data: authData.verifyResetCodeData): Observable<number> {
    return this._httpClient.post<AuthAdapted>(`${this._baseUrl}/${AuthEndPoint.RESET_CODE}`, data, {observe: 'response'}).pipe(map(res=>res.status),);
  }

  resetPassword(data: authData.resetPasswordData): Observable<AuthApiAdaptor> {
    return this._httpClient.put<AuthAdapted>(`${this._baseUrl}/${AuthEndPoint.RESET_PASSWORD}`, data).pipe(map(res=>this._AuthApiAdaptorService.adapt(res))
    );
  }

  changePassword(data: any): Observable<any> {
    return this._httpClient.patch(`${this._baseUrl}/${AuthEndPoint.CHANGE_PASSWORD}`, data);
  }

  deleteMe(): Observable<any> {
    // Implement deleteMe logic
    return this._httpClient.delete(`${this._baseUrl}/${AuthEndPoint.DELETEMYACCOUNT}`);
  }

  editProfile(data: any): Observable<any> {
    // Implement editProfile logic
    return this._httpClient.put(`${this._baseUrl}/${AuthEndPoint.EDITPROFILE}`, data);
  }

logout(): Observable<any> {

  const token = localStorage.getItem('token');

  return this._httpClient.get(
    `${this._baseUrl}/${AuthEndPoint.LOGOUT}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
  getUserInfo():Observable<any>{
    return this._httpClient.get(`${this._baseUrl}/${AuthEndPoint.USERINFO}`);
  }
}
