import { Component, Input, OnInit } from '@angular/core';
import { SpecialGiftsComponent } from './components/special gifts/special-gifts';
import { AboutUs } from './components/about-us/about-us';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'home-page',
  imports: [SpecialGiftsComponent, AboutUs],

  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
