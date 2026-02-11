import { Component, inject } from '@angular/core';
import { FormLabel } from '../../../shared/components/form-label/form-label';
import { FormInput } from '../../../shared/components/form-input/form-input';
import { PhoneInput } from '../../../shared/components/phone-input/phone-input';
import {
  CustomButton,
  AlertComponent,
  NotificationService,
} from '@Ui-components';
import { FormLink } from '../../../shared/components/form-link/form-link';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { AuthLibraryService } from '@org/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.scss',
  imports: [
    FormsModule,
    FormLabel,
    FormInput,
    PhoneInput,
    CustomButton,
    FormLink,
    AlertComponent,
    SelectModule,
    ReactiveFormsModule,
  ],
})
export class RegisterComponent {
  // depandencies
  private readonly alertService = inject(NotificationService);
  private readonly authLibraryService = inject(AuthLibraryService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(Router);
  // Global Properties
  disableButton: boolean = false;

  // Validation Regex
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  phoneRegex: RegExp = /^(\+2)?01[0125][0-9]{8}$/;
  nameRegex: RegExp = /^[a-zA-Z\s]{3,}$/;
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Select Input
  genders = [
    { name: 'Male', code: 'male' },
    { name: 'Female', code: 'female' },
  ];

  registerForm = this.formBuilder.nonNullable.group({
    firstName: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
    lastName: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    password: [
      '',
      [Validators.required, Validators.pattern(this.passwordRegex)],
    ],
    rePassword: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
    gender: ['', [Validators.required]],
  });

  // Methods
  rePasswordVaildator() {
    const password = this.registerForm.get('password')?.value;
    const rePassword = this.registerForm.get('rePassword')?.value;

    if (password !== rePassword) {
      this.registerForm.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  }

  submitRegister() {
    if (this.registerForm.invalid) {
      this.alertService.showError(
        'Please fill in all required fields correctly.',
      );
    } else {
      this.disableButton = true;

      this.authLibraryService
        .register(this.registerForm.getRawValue())
        .subscribe({
          next: (response) => {
            this.disableButton = false;
            this.alertService.showSuccess('Registration successful!');
            this.route.navigate(['/login']);
          },
          error: (error) => {
            this.disableButton = false;
          },
        });
    }
  }
}
