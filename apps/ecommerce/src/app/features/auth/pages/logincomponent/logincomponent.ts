import { Component,  } from '@angular/core';
import {  RouterModule } from "@angular/router";
import { FormInput } from '../../../../shared/components/form-input/form-input';
import { PhoneInput } from "../../../../shared/components/phone-input/phone-input";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterModule, FormInput,],
})
export class LoginComponent {

}

