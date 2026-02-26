import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  imports: [],
  templateUrl: './mainHeader.html',
  styleUrl: './mainHeader.css',
})
export class MainHeader {
  @Input() text : string = '';
}
