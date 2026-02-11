import { Component, inject, OnInit, Signal, WritableSignal } from '@angular/core';
import { FormInput } from "../../../shared/components/form-input/form-input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from 'node_modules/@angular/common/types/_common_module-chunk';
import { AuthLibraryService } from '@org/auth'
@Component({
  selector: 'app-forget-password',
  imports: [FormInput, ReactiveFormsModule, CommonModule],
  templateUrl: './forgetPassword.html',
  styleUrls: ['./forgetPassword.scss'],
})
export class ForgetPassword implements OnInit {
  forgetPasswordForm! : FormGroup;
 _formBuilder = inject(FormBuilder);
  currentStep!: WritableSignal<1|2|3>;
  _AuthLibraryService = inject(AuthLibraryService);

  ngOnInit(){
    this.currentStep.set(1);
    this.forgetPasswordForm = this._formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onsubmit(){
    if(this.forgetPasswordForm.valid){
      this._AuthLibraryService.forgotPassword(this.forgetPasswordForm.value).subscribe({
        next: (res)=>{
          if(res === 200){
            this.currentStep.set(2);
          }
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }


}
