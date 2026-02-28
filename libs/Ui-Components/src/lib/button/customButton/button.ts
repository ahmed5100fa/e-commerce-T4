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
  @Input() icon?: readonly LucideIconNode[] | string;
  @Input() dir: 'ltr' | 'rtl' = 'ltr';
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
 


  // Accessor for Button Classes
  get buttonClasses(): string {
    let classes =
      'w-full spacing-custom-button rounded-2xl transition-all text-lg border-2 flex items-center justify-center gap-2 ';

    if (!this.disabledState) {
      if (this.buttonStyle === 'primary')
        classes +=
          'bg-[#A6252A] border-[#A6252A] text-white active:bg-[#741C21] active:border-[#741C21]';
      else if (this.buttonStyle === 'second')
        classes +=
          'bg-[#FBEAEA] border-[#FBEAEA] text-[#A6252A] active:bg-[#F3C5C7] active:border-[#F3C5C7]';
      else if (this.buttonStyle === 'third')
        classes +=
          'bg-white border-[#A6252A] text-[#A6252A] active:bg-[#FBEAEA] active:border-[#A6252A]';
      else if (this.buttonStyle === 'fourth')
        classes +=
          'bg-zinc-50 border-zinc-400 text-zinc-400 active:bg-zinc-100 active:border-zinc-400';
      else if (this.buttonStyle === 'fifth')
        classes +=
          'bg-white border-transparent text-zinc-800 active:bg-zinc-100 active:border-transparent';
      else if (this.buttonStyle === 'sixth')
        classes +=
          'bg-[#DC2626] border-[#DC2626] text-white active:bg-[#B91C1C] active:border-[#B91C1C]';
    } else {
      classes += 'cursor-not-allowed ';

      // Disapled State Styles

      if (
        this.buttonStyle === 'primary' ||
        this.buttonStyle === 'second' ||
        this.buttonStyle === 'sixth'
      ) {
        classes += 'bg-zinc-300 border-zinc-300 text-zinc-500';
      } else if (
        this.buttonStyle === 'third' ||
        this.buttonStyle === 'fourth'
      ) {
        classes += 'bg-zinc-100 border-zinc-400 text-zinc-400';
      } else if (this.buttonStyle === 'fifth') {
        classes += 'bg-zinc-100 border-transparent text-zinc-400';
      }
    }

    return classes;
  }
}
