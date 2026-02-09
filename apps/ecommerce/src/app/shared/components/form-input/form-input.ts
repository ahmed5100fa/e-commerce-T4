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

// Define allowed input types
export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time'
  | 'color';

@Component({
  selector: 'app-form-input',
  imports: [InputTextModule],
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
export class FormInput<T = string> implements ControlValueAccessor {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() type: InputType = 'text';
  @Input() Id = '';

  value: T | null = null;  // Use union type to handle null better
  disabled = false;

  private onChange: (value: T | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: T | null): void {
    if (this.type === 'number') {
      this.value = value !== undefined ? value : null;
    } else {
      this.value = value !== undefined ? value : '' as unknown as T | null;
    }
  }

  registerOnChange(fn: (value: T | null) => void): void {
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

    let parsedValue: T | null = null;

    if (this.type === 'number') {
      parsedValue = (input.value === '' ? null : Number(input.value)) as unknown as T;
    } else {
      parsedValue = input.value as unknown as T;
    }

    this.value = parsedValue;
    this.onChange(this.value);
    this.onTouched();
  }
}
