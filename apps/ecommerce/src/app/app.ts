import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import {AuthLibraryService } from '@org/auth';
import { PhoneInput } from "./shared/components/phone-input/phone-input";
@Component({
  imports: [RouterModule, SliderModule, FormsModule, PhoneInput],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
   stateOptions: any[]=[];
        value!: number;

  protected title = 'ecommerce';
}
