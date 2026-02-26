import { Component } from '@angular/core';
import { SpecialGiftsComponent } from './components/special gifts/special-gifts';

@Component({
  selector: 'home-page',
  imports: [SpecialGiftsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
