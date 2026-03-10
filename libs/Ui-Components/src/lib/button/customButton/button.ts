import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconNode } from 'lucide-angular';

// import{createIcons} from ""

type ButtonStyle =
  | 'primary'
  | 'second'
  | 'third'
  | 'fourth'
  | 'fifth'
  | 'sixth';

@Component({
  selector: 'lib-custom-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class CustomButton {
  // ==== Global Propierties for Button ======
  @Input() label!: string;
  @Input() disabledState = false;
  @Input() icon?: readonly LucideIconNode[] | undefined;
  @Input() dir: 'ltr' | 'rtl' = 'ltr';
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';

  // Accessor for Button Classes
  get buttonClasses(): string {
    let classes =
      ' spacing-custom-button rounded-2xl transition-all text-lg border-2 flex items-center justify-center gap-2 ';

    if (!this.disabledState) {
      if (this.buttonStyle === 'primary')
        classes +=
          'bg-button-primary border-button-primary text-white active:bg-button-primary-onClick active:border-button-primary-onClick';
      else if (this.buttonStyle === 'second')
        classes +=
          'bg-button-secondary border-button-secondary text-button-primary active:bg-button-secondary-onClick active:border-button-secondary-onClick';
      else if (this.buttonStyle === 'third')
        classes +=
          'bg-button-third border-button-primary text-button-primary active:bg-button-third-onClick active:border-button-primary';
      else if (this.buttonStyle === 'fourth')
        classes +=
          'bg-button-fourh border-zinc-400 text-zinc-400 active:bg-button-fourth-onClick active:border-zinc-400';
      else if (this.buttonStyle === 'fifth')
        classes +=
          'bg-button-fifth border-transparent text-zinc-800 active:bg-button-fifth-onClick active:border-transparent';
      else if (this.buttonStyle === 'sixth')
        classes +=
          'bg-button-sixth border-button-sixth text-white active:bg-button-sixth-onClick active:border-button-sixth-onClick';
    } else {
      classes += 'cursor-not-allowed ';

      // Disapled State Styles
      if (
        this.buttonStyle === 'primary' ||
        this.buttonStyle === 'second' ||
        this.buttonStyle === 'sixth'
      ) {
        classes +=
          'bg-button-primary-disapled border-button-primary text-zinc-500';
      } else if (
        this.buttonStyle === 'third' ||
        this.buttonStyle === 'fourth'
      ) {
        classes += 'bg-button-third-disapled border-zinc-400 text-zinc-400';
      } else if (this.buttonStyle === 'fifth') {
        classes += 'bg-button-third-disapled border-transparent text-zinc-400';
      }
    }

    return classes;
  }
}
