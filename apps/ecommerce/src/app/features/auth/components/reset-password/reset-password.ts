import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInput } from "../../../../shared/components/form-input/form-input";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLibraryService } from '@org/auth'
import { inject, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, FormInput, ReactiveFormsModule],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss'],
})
export class ResetPassword {
  resetPasswordForm! : FormGroup;
 _formBuilder = inject(FormBuilder);
  currentStep = signal<1|2|3>(1);
  _AuthLibraryService = inject(AuthLibraryService);
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
        return;
      }

      this._AuthLibraryService.resetPassword({
        email: this.email(),
        newPassword: this.resetPasswordForm.get('password')?.value,
      }).subscribe({
        next: (res)=>{
            this.currentStep.set(1);
            //add success alert later
        },
        error: (err)=>{
            //add error alert later
        }
      })
    }
    else{
      this.resetPasswordForm.markAllAsTouched();
      //add alert later
    }
  }


}
