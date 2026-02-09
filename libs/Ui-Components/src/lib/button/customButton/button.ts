import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// import{createIcons} from ""

@Component({
  selector: 'custom-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class CustomButton {
  // ==== Global Propierties for Button ======
  @Input() label!: string;
  @Input() disabledState: boolean = false;
  @Input() icon: string = '';
  @Input() dir: 'ltr' | 'rtl' = 'ltr';
  // Primary Button Properties
  @Input() primaryButton!: boolean;
  // Second Button Properties
  @Input() secondButton!: boolean;
  // third Button Properties
  @Input() thirdButton!: boolean;
  // fourth Button Properties
  @Input() fourthButton!: boolean;
  // fifth Button Properties
  @Input() fifthButton!: boolean;
  // sixth Button Properties
  @Input() sixthButton!: boolean;

  // ===== Toaster =====

  @Output() buttonClicked = new EventEmitter<void>();
  onHandleClick() {
    this.buttonClicked.emit();
  }
}
