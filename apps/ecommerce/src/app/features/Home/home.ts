import { Component, Input, OnInit } from '@angular/core';
import { AboutUs } from './components/about-us/about-us';
import { NgOptimizedImage } from '@angular/common';
import { SpecialGiftsCard } from '../../shared/components/special-gifts-card/special-gifts-card';
import { FeatureBar } from './components/feature bar/feature-bar';
import { BestSelling } from './components/best-selling/best-selling';
import { TrustedBy } from './components/trusted-by/trusted-by';
import { Galary } from './components/galary/galary';
import { SpecialGiftsComponent } from './components/special gifts/special-gifts';
import { MostPopularSection } from './components/Most Popular/most-popular';
import { CustomButton } from '@Ui-components';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    SpecialGiftsCard,
    FeatureBar,
    BestSelling,
    TrustedBy,
    Galary,
    SpecialGiftsComponent,
    MostPopularSection,
    CustomButton,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomePageComponent {}
