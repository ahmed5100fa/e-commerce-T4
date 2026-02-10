import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { AuthLibraryService } from '@org/auth';

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
  imports: [CommonModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp {
  private timerInterval: any;
  private _AuthService = inject(AuthLibraryService);

  timer = signal(60);
  canResend: boolean = false;
  isLoading = signal(false);
  apiError: string = '';
  @Input() email: string = '';


  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
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
      const firstInput = document.getElementById('digit1') as HTMLInputElement;
      firstInput?.focus();
    }, 100);
  }



}
