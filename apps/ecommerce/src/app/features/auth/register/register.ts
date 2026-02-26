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
import { InputAlertComponent } from './components/input-alert/input-alert';
import { REGEX } from '../../../shared/constants/regex.constants';
import { passwordMatchValidator } from './services/password-match.validator';
import { Subscription } from 'rxjs';

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
    InputAlertComponent,
    AlertComponent,
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
  icon: string = '';
  internalPhoneData: string = '';
  subscription!: Subscription;
  // Validation Regex
  readonly regexCollection = REGEX;
  // Select Input
  genders = [
    { name: 'Male', code: 'male' },
    { name: 'Female', code: 'female' },
  ];

  registerForm = this.formBuilder.nonNullable.group(
    {
      firstName: [
        '',
        [Validators.required, Validators.pattern(this.regexCollection.name)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(this.regexCollection.name)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.regexCollection.email)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(this.regexCollection.password),
        ],
      ],
      rePassword: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(this.regexCollection.phone)],
      ],
      gender: ['', [Validators.required]],
    },
    {
      validators: passwordMatchValidator,
    },
  );

  // Methods
  submit() {
    if (this.registerForm.valid) {
      this.disableButton = true;
      this.icon = 'pi pi-spin pi-spinner';

      this.internalPhoneData = this.registerForm.get('phone')?.value || '';

      const newData = {
        ...this.registerForm.getRawValue(),
        phone: `+20${this.internalPhoneData}`,
      };

      this.subscription = this.authLibraryService.register(newData).subscribe({
        next: (re) => {
          this.disableButton = false;
          this.icon = '';
          this.alertService.showSuccess('Account created successfully');

          this.registerForm.reset();
          setTimeout(() => {
            this.route.navigate(['/login']);
          }, 2500);
        },
        error: (err) => {
          this.disableButton = false;
          this.icon = '';
        },
      });
    } else {
      this.alertService.showError('Please fill all required fields correctly');
    }
  }
  // Life Cycle Hooks
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
