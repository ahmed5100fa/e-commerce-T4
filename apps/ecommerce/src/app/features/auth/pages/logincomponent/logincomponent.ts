
import { PASSWORD_REGEX } from './../../../../../../../../libs/auth/src/lib/shared/utils/regex.constants';
import { loginData } from '../../../../../../../../libs/auth/src/lib/interfaces/auth-data';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormInput } from '../../../../shared/components/form-input/form-input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiAdaptorService } from 'libs/auth/src/lib/adaptor/auth-api.adaptor';
import { AuthLibraryService } from '@org/auth';
import { AuthApiAdaptor } from 'libs/auth/src/lib/interfaces/adaptor';
import { CustomButton } from '@Ui-components';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterModule, FormInput, FormsModule, ReactiveFormsModule,CustomButton],
})
export class LoginComponent {
  private readonly _authLibraryService = inject(AuthLibraryService);
  private readonly _router = inject(Router);
  msgSuccess: string = '';
  msgError: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
       PASSWORD_REGEX
      ),
    ]),
  });

 




 submitForm(): void {
  if (this.loginForm.valid) {

    this._authLibraryService.login(this.loginForm.value as any).subscribe({
      next: (res: AuthApiAdaptor) => {
        console.log(res);

        if (res.message === 'success') {
          this.msgSuccess = 'Logged in successfully';
          this.msgError = '';

          setTimeout(() => {
            
            // inject(Router).navigate(['/home']);
          }, 2000);
        }
      },

      error: (err: AuthApiAdaptor) => {
        console.log(err);
        this.msgError = err.message || 'Login failed';
        
       
      },
    });



  }
  
  
  
 
}



}
