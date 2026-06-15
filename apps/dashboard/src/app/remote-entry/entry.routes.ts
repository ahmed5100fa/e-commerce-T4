import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { Profile } from './Pages/features/profile/profile';
import { Products } from './Pages/features/Products/Products';
import { Home } from './Pages/features/home/home';
import { AddProduct } from './Pages/features/Products/pages/addProduct/addProduct';
import { EditProduct } from './Pages/features/Products/pages/editProduct/editProduct';

export const remoteRoutes: Route[] = [{ path: '', component: Home }
  ,{ path: 'products', component: Products , children:[
    {path : '' , redirectTo : 'add' , pathMatch : 'full'},
    {path : 'add' , component : AddProduct},
    {path : 'edit/:id' , component : EditProduct}
  ] }
];
