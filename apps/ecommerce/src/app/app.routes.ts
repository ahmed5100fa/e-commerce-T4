
import { Route } from '@angular/router';
import { Authlayout } from './layouts/authlayout';
import { LogincomponentComponent } from './features/auth/logincomponent/logincomponent.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Authlayout, 
    children: [
      {path: 'login', component:LogincomponentComponent, title: 'Login'},
      
    ]
  },

];
