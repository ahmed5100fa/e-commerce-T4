

import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { LoginComponent } from './features/auth/pages/logincomponent/logincomponent';
import { Authlayout } from './layouts/auth layout/authlayout';
import { HomePageComponent } from './features/Home/home';
<<<<<<< HEAD
=======
import { ForgetPassword } from './features/auth/pages/forgetPassword/forgetPassword';
>>>>>>> fc495110a0a72080f226e46d0109dd7be58e587b
export const appRoutes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {
    path: '',
    component: Authlayout,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register').then(
            (m) => m.RegisterComponent,
          ),
      },

      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  { path: 'home', component: HomePageComponent },
];
