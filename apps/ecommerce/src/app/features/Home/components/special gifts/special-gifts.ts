import { Component, ViewChild } from '@angular/core';
import { CustomButton } from '@Ui-components';
import {
  OwlOptions,
  CarouselModule,
  CarouselComponent,
} from 'ngx-owl-carousel-o';
import { SpecialGiftsCard } from 'apps/ecommerce/src/app/shared/components/special-gifts-card/special-gifts-card';
import { SpecialCard } from './components/special gift card/special-card';
import { ArrowRight } from 'lucide-angular';

@Component({
  selector: 'special-gifts',
  imports: [CustomButton, CarouselModule, SpecialGiftsCard, SpecialCard],
  templateUrl: './special-gifts.html',
  styleUrls: ['./special-gifts.scss'],
})
export class SpecialGiftsComponent {
  @ViewChild('owlCar') owlCar!: CarouselComponent;

  // Carousel Items
  carouselItems = [
    {
      image: "bg-[url('/special-gifts/1.png')]",
      title: 'Say It with Flowers',
      subTitle: 'Elegant gifts for every special moment.',
    },
    {
      image: "bg-[url('/special-gifts/2.png')]",
      title: 'Simple Gifts. Lasting Joy',
      subTitle: 'Thoughtfully selected gifts for every occasion.',
    },
    {
      image: "bg-[url('/special-gifts/3.png')] ",
      title: 'Made to Make Them Smile',
      subTitle: 'Because every moment deserves something special.',
    },
  ];

  // Special Card Props

  SpecialCard = [
    {
      image: '/special-gifts/4.png',
      title: 'Celebrate Her Forever with a Gift She’ll Always Remember',
      label: 'Wedding',
    },
    {
      image: '/special-gifts/7.png',
      title: 'Honor the Beginning of a Beautiful Journey Together',
      label: 'Engagement',
    },

    {
      image: '/special-gifts/5.png',
      title: 'Mark Every Year of Love with a Meaningful Surprise',
      label: 'Anniversary',
    },
  ];

  // lucide icons
  arrowIcon = ArrowRight;

  // Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  goNext() {
    this.owlCar.next();
  }

  goPrev() {
    this.owlCar.prev();
  }
}
