import { Injectable } from '@angular/core';
import { Adaptor, AuthAdapted, AuthApiAdaptor } from '../interfaces/adaptor';


@Injectable({
  providedIn: 'root',
})
export class AuthApiAdaptorService implements Adaptor {
  static getItem(arg0: string): string {
    throw new Error('Method not implemented.');
  }
  adapt(data: AuthAdapted): AuthApiAdaptor {
    return {
      message: data.message,
      token: data.token,
      email: data.user.email
    }
  }

}
