import { Route } from '@angular/router';
import { payGardGuard } from '../../core/guards/payGard/pay-gard-guard';

export const cartRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'cart/mainCarts',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadComponent: () => import('./Cart').then(m => m.Cart),
    children: [
      {
        path: '',
        redirectTo: 'mainCarts',
        pathMatch: 'full'
      },

      {
        path: 'mainCarts',
        loadComponent: () =>
          import('./Components/main-carts/main-carts').then(m => m.MainCarts)
      },

      {
        path: 'shipping',
        loadComponent: () =>
          import('./Components/shipping/shipping').then(m => m.Shipping),
        children: [
          {
            path: '',
            redirectTo: 'address',
            pathMatch: 'full'
          },

          {
            path: 'address',
            loadComponent: () => import('./Components/address/address').then(m => m.Address),
            children: [
              {
                path: '',
                redirectTo: 'dynamicAddress',
                pathMatch: 'full'
              },
              {
                path: 'dynamicAddress',
                loadComponent: () => import('./Components/DynamicAddress/DynamicAddress').then(m => m.DynamicAddress)
              },
              {
                path: 'dynamicNewAddress',
                loadComponent: () => import('./Components/DynamicNewAddress/DynamicNewAddress').then(m => m.DynamicNewAddress)
              }
            ]
          },

          {
            path: 'payment',
            loadComponent: () =>
              import('./Components/Payment/Payment').then(m => m.Payment),
            canActivate : [payGardGuard]
          }
        ]
      }
    ]
  }
];
