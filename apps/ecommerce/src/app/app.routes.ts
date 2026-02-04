import { Route } from '@angular/router';
import { LayoutcomponentComponent } from './layouts/layoutcomponent/layoutcomponent.component';
import { LogincomponentComponent } from './features/auth/logincomponent/logincomponent.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: LayoutcomponentComponent,
    children: [
      {
        path: 'login',
        component: LogincomponentComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
];
