import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const rePassword = control.get('rePassword');

  if (!password || !rePassword?.value) return null;

  if (password !== rePassword.value) {
    rePassword.setErrors({ mismatch: true });
    return { mismatch: true };
  }

  rePassword.setErrors(null);
  return null;
}
