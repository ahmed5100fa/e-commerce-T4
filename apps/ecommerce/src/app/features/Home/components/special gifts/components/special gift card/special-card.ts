import { Component, Input } from '@angular/core';

@Component({
  selector: 'special-card',
  imports: [],
  templateUrl: './special-card.html',
})
export class SpecialCard {
  @Input() imgSrc: string = "bg-[url('/special-gifts/6.png')]";
  @Input() label!: string;
  @Input() text!: string;
}
