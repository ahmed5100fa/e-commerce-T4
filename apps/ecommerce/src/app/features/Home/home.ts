import { Component, Input, OnInit } from '@angular/core';
import { AboutUs } from './components/about-us/about-us';
import { NgOptimizedImage } from '@angular/common';
import { SpecialGiftsComponent } from './components/special gifts/special-gifts';
import { FeatureBar } from './components/feature bar/feature-bar';
import { TestimonialsSection } from './components/Testimonials/testimonials';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SpecialGiftsComponent, FeatureBar, TestimonialsSection],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
