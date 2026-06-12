import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { Profile } from './Pages/features/profile/profile';
import { Products } from './Pages/features/Products/Products';

export const remoteRoutes: Route[] = [{ path: '', component: Products }];
