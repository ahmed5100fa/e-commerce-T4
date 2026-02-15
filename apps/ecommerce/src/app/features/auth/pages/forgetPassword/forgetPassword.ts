import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FormInput } from "../../../../shared/components/form-input/form-input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { AuthLibraryService } from '@org/auth'
import { ResetPassword } from '../../components/reset-password/reset-password';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-forget-password',
  imports: [FormInput, ReactiveFormsModule, CommonModule, ResetPassword],
  templateUrl: './forgetPassword.html',
  styleUrls: ['./forgetPassword.scss'],
})
export class ForgetPassword implements OnInit {
  forgetPasswordForm! : FormGroup;
 _formBuilder = inject(FormBuilder);
  currentStep = signal<1|2|3>(1);
  _AuthLibraryService = inject(AuthLibraryService);

  ngOnInit(){
    this.forgetPasswordForm = this._formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onsubmit(){
    if(this.forgetPasswordForm.valid){
      // take until destroyed is used to automatically unsubscribe from the observable when the component is destroyed, preventing memory leaks.
      this._AuthLibraryService.forgotPassword(this.forgetPasswordForm.value).pipe(takeUntilDestroyed()).subscribe({
        next: (res)=>{
          if(res === 200){
            this.currentStep.set(3);
          }
        },
        error: (err)=>{

          this.forgetPasswordForm.markAllAsTouched();
          //add alert later
        }
      })
    }
  }


}
