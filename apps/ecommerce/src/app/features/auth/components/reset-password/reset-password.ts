import { Component, DestroyRef, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInput } from "../../../../shared/components/form-input/form-input";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLibraryService } from '@org/auth'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { FormLink } from "apps/ecommerce/src/app/shared/components/form-link/form-link";
import { AlertComponent, CustomButton, NotificationService } from "@Ui-components";
import { Toast } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, FormInput, ReactiveFormsModule, FormLink, AlertComponent, CustomButton, Toast],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss'],
  providers: [AlertComponent]
})
export class ResetPassword {
  _notificationService = inject(NotificationService)
  _destroyRef = inject(DestroyRef);
  resetPasswordForm! : FormGroup;
 _formBuilder = inject(FormBuilder);
  _AuthLibraryService = inject(AuthLibraryService);
  _route = inject(Router)
  _currentstep = output<1|2|3>();
  email = input('');
  ngOnInit(){
    this.resetPasswordForm = this._formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onsubmit(){
    if(this.resetPasswordForm.valid){
      if(this.resetPasswordForm.get('password')?.value !== this.resetPasswordForm.get('confirmPassword')?.value){
        // add alert later
        this._notificationService.showError("Passwords do not match.");
        return;
      }


                  setTimeout(() => {
              this._route.navigate(['/login']);
            }, 1000);

      this._AuthLibraryService.resetPassword({
        email: this.email(),
        newPassword: this.resetPasswordForm.get('password')?.value,
      }).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (res)=>{
            this._currentstep.emit(1);
            this._notificationService.showSuccess("Password reset successfully!");
              console.log()

        },
        error: (err)=>{
        }
      })
    }
    else{
      this.resetPasswordForm.markAllAsTouched();
        this._notificationService.showError("Please fill in all required fields.");
    }
  }


}
