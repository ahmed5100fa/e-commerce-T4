import { Component } from '@angular/core';
import { FormInput } from '../../../../shared/components/form-input/form-input';
import { CustomButton } from '@Ui-components';
import { LucideAngularModule, ArrowRight  } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CustomButton, LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host:{
  '[attr.data-theme]':'"dark"',
  '[class.theme-dark]': "true"
  }
})
export class Footer {
readonly ArrowRight = ArrowRight;
}
