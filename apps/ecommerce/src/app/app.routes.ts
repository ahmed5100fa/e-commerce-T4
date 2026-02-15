import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
export const appRoutes: Route[] = [
    ...authRouters,
];
