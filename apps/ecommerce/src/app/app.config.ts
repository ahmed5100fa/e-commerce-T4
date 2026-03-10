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
import { MessageService } from 'primeng/api';
import { err } from './core/interceptors/errorhandel.interceptor';
import { loadingInterceptorInterceptor } from './shared/interceptors/loadingInterceptor/loading-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch(), withInterceptors([err , loadingInterceptorInterceptor])),
    { provide: BaseUrl, useValue: 'https://flower.elevateegy.com/api/v1' },
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    MessageService,
  ],
};
