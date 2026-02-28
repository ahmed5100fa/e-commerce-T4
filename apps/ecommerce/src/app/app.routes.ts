import { VerifyOtp } from './features/auth/components/verify-otp/verify-otp';
import { Route } from '@angular/router';
import { authRouters } from './features/auth/auth.routers';
import { LoginComponent } from './features/auth/pages/logincomponent/logincomponent';
import { Authlayout } from './layouts/auth layout/authlayout';

export const appRoutes: Route[] = [
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

  {path: 'verify-otp', component:VerifyOtp}
];
