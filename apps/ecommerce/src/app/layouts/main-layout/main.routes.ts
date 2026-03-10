import { Route } from '@angular/router';
import { productsRoutes } from '../../features/products/products.routes';
export const mainRouter :Route[]  = [
    {path: 'main', loadComponent:()=>import('../../layouts/main-layout/main-layout').then(m=>m.MainLayout),
        children:[
            {path: 'home', loadComponent:()=>import('../../features/Home/home').then(m=>m.HomePageComponent)},
            ...productsRoutes,
        {path:'',redirectTo:'home',pathMatch:'full'}
        ]

    },

]
