import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { mainRouter } from './layouts/main-layout/main.routes';

import { HomePageComponent } from './features/Home/home';
export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
  },
  ...authRouters,
  ...mainRouter,
];
