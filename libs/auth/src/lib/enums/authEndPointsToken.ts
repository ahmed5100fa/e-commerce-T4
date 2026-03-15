import { InjectionToken } from '@angular/core';

export const BaseUrl = new InjectionToken<string>('BaseUrl', {
  providedIn: 'root',
  factory: () => 'https://exam.elevateegy.com/api/v1',
});
