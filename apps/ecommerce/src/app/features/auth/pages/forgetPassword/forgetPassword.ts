import { Component, inject, OnInit, signal, Signal, WritableSignal, DestroyRef } from '@angular/core';
import { FormInput } from "../../../../shared/components/form-input/form-input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { AuthLibraryService } from '@org/auth'
import { ResetPassword } from '../../components/reset-password/reset-password';
import { takeUntil } from 'rxjs';
import { VerifyOtp } from "../../components/verify-otp/verify-otp";
import { NotificationService, CustomButton, AlertComponent } from '@Ui-components';
import { FormLink } from "apps/ecommerce/src/app/shared/components/form-link/form-link";
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
@Component({
  selector: 'app-forget-password',
  imports: [FormInput, ReactiveFormsModule, CommonModule, ResetPassword, VerifyOtp, CustomButton, FormLink, Toast, AlertComponent],
  providers: [MessageService, NotificationService],
  templateUrl: './forgetPassword.html',
  styleUrls: ['./forgetPassword.scss'],
})
export class ForgetPassword implements OnInit {
  forgetPasswordForm! : FormGroup;
 _formBuilder = inject(FormBuilder);
  currentStep = signal<1|2|3>(1);
  _AuthLibraryService = inject(AuthLibraryService);
  _notifyService = inject(NotificationService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    this.forgetPasswordForm = this._formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onsubmit(){
    if(this.forgetPasswordForm.valid){
      // takeUntilDestroyed is used to automatically unsubscribe from the observable when the component is destroyed, preventing memory leaks.
      this._AuthLibraryService.forgotPassword(this.forgetPasswordForm.value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (res)=>{
          if(res === 200){
            this.currentStep.set(2);
            this._notifyService.showSuccess("Password reset successfully!");
          }
        },
        error: (err)=>{
          this.forgetPasswordForm.markAllAsTouched();

        }
      })
    }
      else{
    this.forgetPasswordForm.markAllAsTouched();
    this._notifyService.showError("Please fill in all required fields.");
  }
  }



}
