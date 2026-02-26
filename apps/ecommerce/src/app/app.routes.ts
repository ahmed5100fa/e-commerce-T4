import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { LoginComponent } from './features/auth/pages/logincomponent/logincomponent';
import { Authlayout } from './layouts/auth layout/authlayout';
import { HomePageComponent } from './features/Home/home';

export const appRoutes: Route[] = [...authRouters];
