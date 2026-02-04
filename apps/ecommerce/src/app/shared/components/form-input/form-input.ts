/**
 * FormInputComponent
 * ------------------
 * A reusable input component compatible with Reactive Forms and Template-driven Forms.
 * Supports custom label, placeholder, type, and disabled state.
 * Implements ControlValueAccessor for seamless form integration.
 */


import { Component, forwardRef, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-form-input',
  imports: [InputTextModule ],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInput),
      multi: true
    }
  ]
})
export class FormInput {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Input() Id : string = '';

  value: any = '';
  disabled: boolean = false;

  // Callbacks
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
