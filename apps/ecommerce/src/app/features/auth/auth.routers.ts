import { Route } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';
export const authRouters: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../../layouts/auth layout/authlayout').then((m) => m.Authlayout),
    children: [
      {
        path: 'login',
        canActivate: [authGuardGuard]
        ,
        loadComponent: () =>
          import('./pages/logincomponent/logincomponent').then(
            (m) => m.LoginComponent,
          ),
      },
      {
        path: 'forget-password'
        ,
        canActivate: [authGuardGuard]
        ,
        loadComponent: () =>
          import('./pages/forgetPassword/forgetPassword').then(
            (m) => m.ForgetPassword,
          ),
      },
      {
        path: 'register'
        ,
        canActivate: [authGuardGuard],
        loadComponent: () =>
          import('../auth/register/register').then((m) => m.RegisterComponent),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
