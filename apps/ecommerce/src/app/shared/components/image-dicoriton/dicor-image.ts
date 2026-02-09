import { Component , input , HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-dicor-image',
  imports: [],
  templateUrl: './dicor-image.html',
  styleUrl: './dicor-image.css',
})
export class DicorImage {

  @Input() rotate = 0;

@HostBinding('style.transform') get transform() {
  return `rotate(${this.rotate}deg)`;
}

}
