import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'input-alert',
  standalone: true,
  templateUrl: './input-alert.html',
  styleUrl: './input-alert.scss',
  imports: [],
})
export class InputAlertComponent {
  @Input() error!: string;
  @Input() control!: AbstractControl | null;
  @Input() message!: string;
}
