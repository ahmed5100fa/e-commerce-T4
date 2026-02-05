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
export class FormInput <T = string> implements ControlValueAccessor
{
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() Id = '';

  value!: T;
  disabled = false;

  private onChange: (value: T) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: T | null): void {
  this.value = value as T;
}


  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    const parsedValue =
      this.type === 'number'
        ? (Number(input.value) as unknown as T)
        : (input.value as unknown as T);

    this.value = parsedValue;
    this.onChange(this.value);
    this.onTouched();
  }
}
