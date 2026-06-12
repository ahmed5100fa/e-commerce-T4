/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

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
  selector: 'lib-shared-inp',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './sharedInp.html',
  styleUrl: './sharedInp.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedInp),
      multi: true,
    },
  ],
})
export class SharedInp implements ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: InputType = 'text';
  @Input() id = '';
  @Input() value: string | number | null | undefined = null;

  @Output() valueChange = new EventEmitter<string>();

  @Input() disabled = false;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? null;
  }

  registerOnChange(fn: (value: any) => void): void {
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

    let parsedValue: string | number | null = input.value;

    if (this.type === 'number') {
      parsedValue = input.value === '' ? null : Number(input.value);
    }

    this.value = parsedValue;

    this.onChange(this.value);
    this.valueChange.emit(input.value);
    this.onTouched();
  }
}
