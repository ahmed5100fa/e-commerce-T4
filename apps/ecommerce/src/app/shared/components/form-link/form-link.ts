import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-link',
  imports: [RouterLink],
  templateUrl: './form-link.html',
  styleUrl: './form-link.scss',
})
export class FormLink {
  @Input() label: string = '';
  @Input() link: string = '';
  @Input({ required: true }) routerLink = '';
}
