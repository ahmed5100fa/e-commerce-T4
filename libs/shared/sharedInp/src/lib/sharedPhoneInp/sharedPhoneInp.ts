/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'lib-shared-phone-inp',
  standalone: true,

  templateUrl: './sharedPhoneInp.html',
  styleUrl: './sharedPhoneInp.css',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedPhoneInp),
      multi: true,
    },
  ],
})
export class SharedPhoneInp implements ControlValueAccessor {

  @Input() value: string | number | null | undefined = null;
  disabled = false;
  @Output() valueChange = new EventEmitter<string>();
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.onChange(this.value);
    this.valueChange.emit(input.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
