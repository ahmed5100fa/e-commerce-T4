import { InputOtpModule } from 'primeng/inputotp';

import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AuthLibraryService } from '@org/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-opt',
  imports: [ReactiveFormsModule,InputOtpModule, FormsModule],
template: `
        <div class="card flex justify-center">
            <p-inputotp [(ngModel)]="value" [(length)]="6" />
        </div>
    `,
    standalone: true,

  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOpt implements OnInit {
 value: any;
private readonly _fb=inject(FormBuilder);
private readonly _authService=inject(AuthLibraryService);
msgError:string=''
// private readonly router=inject(Router); >> reset password page not ready yet

verifyCode!:FormGroup

 step:number=1;

ngOnInit(): void {

  this.initForm()
}

initForm():void{
this.verifyCode=this._fb.group({
c1:[null , [Validators.required]],
c2:[null , [Validators.required]],
c3:[null , [Validators.required]],
c4:[null , [Validators.required]],
c5:[null , [Validators.required]],
c6:[null , [Validators.required]],

})

}


formTow():void{
if(this.verifyCode.valid){
  
const paylod ={
  resetCode: this.verifyCode.value.c1+this.verifyCode.value.c2+this.verifyCode.value.c3+this.verifyCode.value.c4+this.verifyCode.value.c5+this.verifyCode.value.c6,
}

  this._authService.verifyResetCode(paylod).subscribe({
next:(response)=>{
  console.log(response);
  
},
error:(err)=>{
  console.log(err);
   this.msgError= err.error.message
  
}
})
}


}

}
