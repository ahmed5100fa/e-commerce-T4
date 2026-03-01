import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { AuthLibraryService } from '@org/auth';
import { PhoneInput } from './shared/components/phone-input/phone-input';
import { FormInput } from './shared/components/form-input/form-input';
import { SpecialGiftsComponent } from './features/Home/components/special gifts/special-gifts';
import { SpecialGiftsCard } from './shared/components/special-gifts-card/special-gifts-card';
import { HomePageComponent } from './features/Home/home';
@Component({
  imports: [
    RouterModule,
    SliderModule,
    FormsModule,
    PhoneInput,
    NxWelcome,
    FormInput,
    SpecialGiftsComponent,
    SpecialGiftsCard,
    HomePageComponent,
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
