import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
})
export class Stepper {
  @Input() currentStep: number = 1;

  @Input() steps: { position: number }[] = [
    { position: 30 },
    { position: 75 }
  ];

  calculateWidth(): number {
    return this.steps[this.currentStep - 1]?.position || 0;
  }
}
