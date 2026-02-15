import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-label',
  imports: [],
  templateUrl: './form-label.html',
  styleUrl: './form-label.scss',
})
export class FormLabel {
  @Input() label: string = '';
}
