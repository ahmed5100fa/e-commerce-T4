import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { mainRouter } from './layouts/main-layout/main.routes';

import { HomePageComponent } from './features/Home/home';
export const appRoutes: Route[] = [
  ...authRouters,
  ...mainRouter,




]



