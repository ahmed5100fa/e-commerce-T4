import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconNode } from 'lucide-angular';

@Component({
  selector: 'feature-component',
  imports: [LucideAngularModule],

  templateUrl: './feature-bar-icon.html',
  styleUrls: ['./feature-bar-icon.scss'],
})
export class featureIcon {
  @Input() head!: string;
  @Input() text!: string;
  @Input() icon?: readonly LucideIconNode[] | undefined;
}
