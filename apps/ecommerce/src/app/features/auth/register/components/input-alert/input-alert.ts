import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-alert',
  standalone: true,
  templateUrl: './input-alert.html',
  styleUrl: './input-alert.scss',
  imports: [],
})
export class InputAlertComponent {
  @Input() message!: string;
}
