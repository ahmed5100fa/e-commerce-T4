import { Route } from '@angular/router';

export const cartRoutes:Route[] = [
    {
        path : 'cart', loadComponent:()=>import('./Cart').then(m=>m.Cart)
    }
]
