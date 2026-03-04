import { Component } from '@angular/core';
import { CustomButton } from '@Ui-components';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
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
  // Images
  imges: string[] = [
    "bg-[url('/special-gifts/1.png')]",
    "bg-[url('/special-gifts/2.png')]",
    "bg-[url('/special-gifts/3.png')] ",
  ];

  titles: string[] = [
    'Say It with Flowers',
    'Simple Gifts. Lasting Joy',
    'Made to Make Them Smile',
  ];
  subTitle: string[] = [
    'Elegant gifts for every special moment.',
    'Thoughtfully selected gifts for every occasion.',
    'Because every moment deserves something special.',
  ];

  // Special Card Props
  specialCardImgs: string[] = [
    "bg-[url('/special-gifts/4.png')] ",
    "bg-[url('/special-gifts/7.png')] ",
    "bg-[url('/special-gifts/5.png')]",
  ];
  specialCardTexts: string[] = [
    'Celebrate Her Forever with a Gift She’ll Always Remember',
    'Honor the Beginning of a Beautiful Journey Together',
    'Mark Every Year of Love with a Meaningful Surprise',
  ];
  specialCardLabels: string[] = ['Wedding', 'Engagement', 'Anniversary'];

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
}
