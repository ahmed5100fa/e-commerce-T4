import { Route } from '@angular/router';
<<<<<<< features/auth-forgetpasseord
import { authRouters } from './features/auth/auth.routers';
export const appRoutes: Route[] = [
    ...authRouters,
=======
import { Authlayout } from './layouts/auth layout/authlayout';
import { LoginComponent } from './features/auth/pages/logincomponent/logincomponent';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Authlayout,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
>>>>>>> main
];
