import { Component, Input } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'testimonials-card',
  imports: [LucideAngularModule],

  templateUrl: './testimonials-card.html',
  styleUrls: ['./testimonials-card.scss'],
})
export class TestimonialsCard {
  @Input() userName!: string;
  @Input() userComment!: string;
  @Input() userImg!: string;
  Star = Star;
}
