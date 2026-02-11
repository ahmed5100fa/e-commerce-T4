import { InputOtpModule } from 'primeng/inputotp';

import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { NgIf } from "../../../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-verify-opt',
  imports: [ReactiveFormsModule, InputOtpModule, FormsModule, RouterModule],
template: `
        <div class="card flex justify-center">
            <p-inputotp [(ngModel)]="value" [(numInputs)]="6" [separator]="'-'"/>
        </div>
    `,
    standalone: true,

  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOpt implements OnInit {
 value: any;
private readonly _fb=inject(FormBuilder);

verifyCode!:FormGroup

ngOnInit(): void {

  this.initForm()
}

initForm():void{
  this.verifyCode=this._fb.group({
resetCode:[null ,[Validators.required]]
  })
}


}
