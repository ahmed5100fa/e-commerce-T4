import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-verify-opt',
  imports: [],
  templateUrl: './verify-opt.html',
  styleUrl: './verify-opt.css',
})
export class VerifyOpt {





private readonly formBuilder = inject(FormBuilder);
private readonly router = inject(Router);
verifyEmail!:FormGroup;
verifyCode!:FormGroup;
resetpassword!:FormGroup;
msgError:string="";

userEmail: string = ""; 


 step:number=1;

ngOnInit(): void {
    this.initForm();
}
initForm():void{

this.verifyEmail=this.formBuilder.group({
email:[null , [Validators.required, Validators.email]]
})

this.verifyCode=this.formBuilder.group({
c1:[null , [Validators.required]],
c2:[null , [Validators.required]],
c3:[null , [Validators.required]],
c4:[null , [Validators.required]],
c5:[null , [Validators.required]],
c6:[null , [Validators.required]],

})

this.resetpassword=this.formBuilder.group({
newPassword:[null , [Validators.required,  Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
confirmPassword:[null , [Validators.required]]
})

 
}

//==================================
formOne():void{
if(this.verifyEmail.valid){

this.userEmail = this.verifyEmail.value.email;


//   this._authLibraryService.forgetPassword(this.verifyEmail.value).subscribe({
// next:(response)=>{
//   console.log(response);
//   this.step=2;
// },
// error:(err)=>{
//   console.log(err);
//   this.msgError= err.error.message
// }
// })
// }


}
//==================================
// formTow():void{
// if(this.verifyCode.valid){
  
// const paylod ={
//   resetCode: this.verifyCode.value.c1+this.verifyCode.value.c2+this.verifyCode.value.c3+this.verifyCode.value.c4+this.verifyCode.value.c5+this.verifyCode.value.c6,
// }

//   this._authService.verifyCode(paylod).subscribe({
// next:(response)=>{
//   console.log(response);
//   this.step=3;
// },
// error:(err)=>{
//   console.log(err);
//    this.msgError= err.error.message
  
// }
// })
// }


// }

//==================================

// formThree():void{
// if(this.resetpassword.valid){

// const paylod={
//   email:this.verifyEmail.value.email,
//   newPassword:this.resetpassword.value.newPassword,
// }
//   this._authService.resetpassword(paylod).subscribe({
// next:(response)=>{
//   console.log(response);
// this.router.navigate(['/signin']);
// },
// error:(err)=>{
//   console.log(err);
//   this.msgError= err.error.message
// }

// })
// }


}


  // private _authService = inject(AuthService);
  // public get authService() {
  //   return this._authService;
  // }
  // public set authService(value) {
  //   this._authService = value;
  // }
 


}
