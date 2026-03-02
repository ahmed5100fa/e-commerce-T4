import { Route } from '@angular/router';

export const mainRouter :Route[]  = [
    {path: 'main', loadComponent:()=>import('../../layouts/main-layout/main-layout').then(m=>m.MainLayout),
        children:[
            {path: 'home', loadComponent:()=>import('../../features/Home/home').then(m=>m.HomePageComponent)},
        {path:'',redirectTo:'home',pathMatch:'full'}
        ]

    },

]
