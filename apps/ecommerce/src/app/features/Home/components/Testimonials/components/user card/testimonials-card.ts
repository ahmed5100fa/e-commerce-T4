import { Component, Input } from '@angular/core';
import { TestimonialsUsers } from 'apps/ecommerce/src/app/shared/interfaces/testimonials.interface';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'testimonials-card',
  imports: [LucideAngularModule],

  templateUrl: './testimonials-card.html',
  styleUrls: ['./testimonials-card.scss'],
})
export class TestimonialsCard {
  Star = Star;

  @Input() testimonal!: TestimonialsUsers;

  get userFirstName(): string {
    return this.testimonal.user.firstName;
  }

  get userLastName(): string {
    return this.testimonal.user.lastName;
  }
  get userImg(): string {
    return this.testimonal.user.photo;
  }
  get commentDate(): string {
    const date = new Date(this.testimonal.updatedAt);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  }
  get userComment(): string {
    return this.testimonal.content;
  }
  get userRate(): number {
    return this.testimonal.rating;
  }
}
