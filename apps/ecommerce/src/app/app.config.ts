import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { BaseUrl } from '@org/auth';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { err } from './core/interceptors/errorhandel.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch(), withInterceptors([err])),
    { provide: BaseUrl, useValue: 'https://flower.elevateegy.com/api/v1/' },
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
