import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { mainRouter } from './layouts/main-layout/main.routes';
export const appRoutes: Route[] = [
  ...authRouters,
  ...mainRouter,
];
