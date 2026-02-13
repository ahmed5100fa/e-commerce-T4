import { Route } from '@angular/router';
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
];
