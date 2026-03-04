import { Component, inject } from '@angular/core';
import { TestimonialsCard } from './components/user card/testimonials-card';
import { MainHeader } from 'apps/ecommerce/src/app/shared/components/mainHeader/mainHeader';
import { SecondHeader } from 'apps/ecommerce/src/app/shared/components/secondHeader/secondHeader';
import { TestimonialService } from '../../services/testimonialsService/testimonials.service';
import { TestimonialsUsers } from 'apps/ecommerce/src/app/shared/interfaces/testimonials.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'testimonials-section',
  imports: [TestimonialsCard, MainHeader, SecondHeader],

  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class TestimonialsSection {
  private readonly _testimonialService = inject(TestimonialService);
  users: TestimonialsUsers[] = [];
  subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this._testimonialService.getTestmioinals().subscribe({
      next: (res) => {
        this.users = res.testimonials;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
