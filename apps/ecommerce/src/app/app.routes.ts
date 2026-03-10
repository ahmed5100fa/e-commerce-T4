import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { mainRouter } from './layouts/main-layout/main.routes';
import { ProductDet } from './features/Home/components/product-det/product-det';
import { HomePageComponent } from './features/Home/home';
export const appRoutes: Route[] = [
  ...authRouters,
  ...mainRouter,



 
]



