import { Injectable, inject } from '@angular/core';
import { AuthApiAdaptor } from 'libs/auth/src/lib/interfaces/adaptor';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class StoreUserData {
  private readonly cookiesSSR = inject(SsrCookieService);

  setData(cookieName: string, value: AuthApiAdaptor, rememberMe: boolean) {
    const userData = typeof value == 'object' ? JSON.stringify(value) : value;
    this.cookiesSSR.set(cookieName, userData, {
      expires: rememberMe ? 30 : undefined,
      path: '/',
      sameSite: 'Lax',
    });
  }

  getData(cookieName: string) {
    const cookiesName = this.cookiesSSR.get(cookieName);
    if (!cookiesName || cookiesName == '') return null;
    try {
      return JSON.parse(cookiesName);
    } catch (e) {
      return cookiesName;
    }
  }

  deleteCookie(cookieName: string) {
    this.cookiesSSR.delete(cookieName, '/');
  }
}
