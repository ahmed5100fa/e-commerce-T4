

import { InputOtpModule } from 'primeng/inputotp';

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { AuthLibraryService } from '@org/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-verify-otp',
  imports: [ReactiveFormsModule, InputOtpModule, FormsModule],

  standalone: true,

  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOpt implements OnInit,OnDestroy {
  private subscriptions: Subscription[] = [];
  value: any;
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthLibraryService);
  private readonly _router = inject(Router);
  msgError: string = '';
  // private readonly router=inject(Router); >> reset password page not ready yet

  verifyCode!: FormGroup;
userEmail: string = '';
  step: number = 1;


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.verifyCode = this._fb.group({
      c1: [null, [Validators.required]],
      c2: [null, [Validators.required]],
      c3: [null, [Validators.required]],
      c4: [null, [Validators.required]],
      c5: [null, [Validators.required]],
      c6: [null, [Validators.required]],
    });

  }

  formSubmit(): void {
    if (this.verifyCode.valid) {
      const paylod = {
        resetCode:
          this.verifyCode.value.c1 +
          this.verifyCode.value.c2 +
          this.verifyCode.value.c3 +
          this.verifyCode.value.c4 +
          this.verifyCode.value.c5 +
          this.verifyCode.value.c6,
      };

   const sub = this._authService.verifyResetCode(paylod).subscribe({
  next: (response) => {
    console.log(response);
   
  },
  error: (err) => {
    this.msgError = err.error.message;
  }
});

this.subscriptions.push(sub);

      
    }
  }
}
