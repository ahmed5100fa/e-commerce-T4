import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { mainRouter } from './layouts/main-layout/main.routes';
import { ProductDet } from './features/Home/components/product-det/product-det';
export const appRoutes: Route[] = [...authRouters, ...mainRouter,
    {path:'product/:id/:slug',component:ProductDet}


];
