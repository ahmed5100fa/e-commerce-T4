import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, input, Input, OnDestroy, OnInit, output, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLibraryService } from '@org/auth';
import { CustomButton } from "@Ui-components";
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { InputOtp } from "primeng/inputotp";

/**
 * VerifyOtp Component
 * -------------------
 * This component is responsible for handling OTP verification UI behavior.
 *
 * Flow:
 * - Receives the user's email from the parent component.
 * - Starts a 60-second countdown when the component loads.
 * - Disables "Resend Code" until the timer finishes.
 * - When "Resend Code" is clicked, it calls `forgotPassword` again
 *   to generate and send a new OTP to the same email.
 * - Restarts the timer after resending and resets OTP inputs.
 *
 * Note:
 * - This component does NOT verify the OTP itself.
 * - OTP validation is handled separately via the `verifyResetCode` API.
 */


@Component({
  selector: 'app-verify-otp',
  imports: [CommonModule, CustomButton, InputOtp, ReactiveFormsModule, RouterLink],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp implements OnInit, OnDestroy {
  private timerInterval: any;
  private _AuthService = inject(AuthLibraryService);
  private subscriptions: Subscription[] = [];
  value: any;
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthLibraryService);
  private readonly _router = inject(Router);
  msgError: string = '';


  _currentStep = output<1|2|3>();

  timer = signal(60);
  canResend: boolean = false;
  isLoading = signal(false);
  apiError: string = '';
  @Input() email: string = '';


  @ViewChild('digit1') firstInput!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.startTimer();
    this.initForm(); //yous

  }

  ngAfterViewInit() {
    this.firstInput?.nativeElement.focus();
  }

  ngOnDestroy() {
    this.clearTimer();
    this.subscriptions.forEach(sub => sub.unsubscribe()); //yous

  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  startTimer() {
    this.clearTimer();
    this.timer.set(60);
    this.canResend = false;

    this.timerInterval = setInterval(() => {
      this.timer.update(current => {
        const newTime = current - 1;

        if (newTime <= 0) {
          this.clearTimer();
          this.canResend = true;
          return 0;
        }

        return newTime;
      });
    }, 1000);
  }

  resendCode() {
    if (!this.canResend || this.isLoading()) return;

    this.isLoading.set(true);

    this._AuthService.forgotPassword({ email: this.email }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.startTimer();
        this.resetCode();
        console.log("hello");
      },
      error: (err) => {
        this.isLoading.set(false);
        console.log("error");
        this.apiError = err.error?.message || 'Failed to resend code. Please try again.';
      }
    });
  }

  resetCode() {
    setTimeout(() => {
      this.firstInput?.nativeElement.focus();
    }, 100);
  }
  submitCode() {
    console.log("submit code");
    this.formSubmit();
    this._currentStep.emit(3);
  }


/* ================= code=>Yous =============== */


  // private readonly router=inject(Router); >> reset password page not ready yet

  verifyCode!: FormGroup;
userEmail: string = '';
  step: number = 1;

  initForm(): void {
    this.verifyCode = this._fb.group({
      otp: [null, [Validators.required]],
      // c2: [null, [Validators.required]],
      // c3: [null, [Validators.required]],
      // c4: [null, [Validators.required]],
      // c5: [null, [Validators.required]],
      // c6: [null, [Validators.required]],
    });

  }

  formSubmit(): void {
    if (this.verifyCode.valid) {
      const paylod = {
        resetCode:this.verifyCode.value.otp
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

      
    }else{
      console.log("invalid form");
      console.log(this.verifyCode);
    }
  }






}
