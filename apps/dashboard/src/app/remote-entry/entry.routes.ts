import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { Profile } from './Pages/features/profile/profile';
import { BreadCrumb } from './shared/breadCrumb/breadCrumb';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Overview } from './Pages/features/Overview/Overview';
import { Occassion } from './Pages/features/Occassion/Occassion';
import { Products } from './Pages/features/Products/Products';

export const remoteRoutes: Route[] = [
   {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'overview',
        component: Overview,
      },
      {
        path: 'occassion',
        component: Occassion,
      },
      {
        path: 'products',
        component: Products,
      },
    ],
  },
];
