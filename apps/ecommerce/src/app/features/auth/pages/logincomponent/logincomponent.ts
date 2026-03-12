import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormInput } from '../../../../shared/components/form-input/form-input';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthLibraryService } from '@org/auth';
import { AuthApiAdaptor } from 'libs/auth/src/lib/interfaces/adaptor';
import { CustomButton, NotificationService } from '@Ui-components';
import { FormLabel } from 'apps/ecommerce/src/app/shared/components/form-label/form-label';
import { FormLink } from 'apps/ecommerce/src/app/shared/components/form-link/form-link';
import { StoreUserData } from 'apps/ecommerce/src/app/core/services/cookies.service';
import { PASSWORD_REGEX } from './../../../../../../../../libs/auth/src/lib/shared/utils/regex.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    RouterModule,
    FormInput,
    FormsModule,
    ReactiveFormsModule,
    CustomButton,
    FormLabel,
    FormLink,
  ],
})
export class LoginComponent {

  private readonly authService = inject(AuthLibraryService);
  private readonly router = inject(Router);
  private readonly cookies = inject(StoreUserData);
  private readonly notification = inject(NotificationService);

  rememberMe: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX)
    ]),
  });

  rememberMeOption(event: Event): void {
    this.rememberMe = (event.target as HTMLInputElement).checked;
  }

  submitForm(): void {

    if (this.loginForm.invalid) {
      this.notification.showError('Please fill all required fields correctly');
      return;
    }

    const loginData = this.loginForm.value;

    this.authService.login(loginData as any).subscribe({

      next: (res: AuthApiAdaptor) => {

        if (res.message === 'success') {

          this.notification.showSuccess('Logged in successfully');

          // store token
          localStorage.setItem('token', res.token);

          // store user data in cookies
          this.cookies.setData('userData', res, this.rememberMe);

          // navigate
          this.router.navigate(['/main/home']);

        } else {
          this.notification.showError('Login failed');
        }

      },

      error: (err: any) => {

        const message =
          err?.error?.message ||
          err?.message ||
          'Something went wrong';

        this.notification.showError(message);

        console.error(err);

      },
    });
  }
}
