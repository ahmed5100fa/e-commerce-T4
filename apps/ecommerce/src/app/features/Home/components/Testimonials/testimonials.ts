import { Component } from '@angular/core';
import { TestimonialsCard } from './components/user card/testimonials-card';
import { MainHeader } from 'apps/ecommerce/src/app/shared/components/mainHeader/mainHeader';
import { SecondHeader } from 'apps/ecommerce/src/app/shared/components/secondHeader/secondHeader';

@Component({
  selector: 'testimonials-section',
  imports: [TestimonialsCard, MainHeader, SecondHeader],

  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class TestimonialsSection {
  users = [
    {
      userName: 'Jake Miller',
      userComment:
        "I've been ordering from this flower shop for years and they never disappoint. The quality and service are exceptional!",
      userImg: './testimonials/1.png',
    },
    {
      userName: 'Tyler Brooks',
      userComment:
        "Customer service is top-notch and the flowers last longer than any others I've bought. Highly recommend!",
      userImg: './testimonials/2.png',
    },
    {
      userName: 'Max Turner',
      userComment:
        'The team truly cares about every order. I always feel confident when I buy flowers from here. The checkout process was sup...',
      userImg: './testimonials/3.png',
    },
  ];
}
