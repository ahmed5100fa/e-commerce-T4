import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { AuthLibraryService } from '@org/auth';
import { PhoneInput } from './shared/components/phone-input/phone-input';
import { FormInput } from './shared/components/form-input/form-input';
import { Navbar } from "./layouts/main layout/navbar/navbar";
@Component({
  imports: [
    RouterModule,
    SliderModule,
    FormsModule,
    PhoneInput,
    NxWelcome,
    FormInput,
    Navbar
],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  stateOptions: any[] = [];
  value!: number;

  protected title = 'ecommerce';
}
