import { Injectable } from '@angular/core';
import { Adaptor, AuthAdapted, AuthApiAdaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthApiAdaptorService implements Adaptor {
  adapt(data: AuthAdapted): AuthApiAdaptor {
    return {
      message: data.message,
      token: data.token,
      _id: data.user._id,
      username: data.user.username,
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      createdAt: data.user.createdAt,
      email: data.user.email,
      isVerified: data.user.isVerified,
      passwordResetCode: data.user.passwordResetCode,
      passwordResetExpires: data.user.passwordResetExpires,
      phone: data.user.phone,
      resetCodeVerified: data.user.resetCodeVerified,
      role: data.user.role,
    };
  }
}
