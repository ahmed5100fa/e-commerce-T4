import { Route } from "@angular/router";

export const productsRoutes:Route[] = [
    {
        path : 'products', loadComponent:()=>import('./products').then(m=>m.Products),

        
    },
    
            {
                path : 'product/:id', loadComponent:()=>import('./pages/productdetails/productdetails').then(m=>m.Productdetails)
            }
]