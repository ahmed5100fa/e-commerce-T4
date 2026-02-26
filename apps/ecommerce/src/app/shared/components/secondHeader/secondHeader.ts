import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-header',
  imports: [],
  templateUrl: './secondHeader.html',
  styleUrl: './secondHeader.css',
})
export class SecondHeader {
  @Input() text: string = '';
}
