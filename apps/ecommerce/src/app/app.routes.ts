import { Route } from '@angular/router';
import { Authlayout } from './layouts/auth layout/authlayout';
import { LoginComponent } from './features/auth/logincomponent/logincomponent';
import { VerifyOpt } from './features/auth/verify-otp/verify-otp';


export const appRoutes: Route[] = [
{path: '',component:Authlayout,
    children:[
    {path: 'login',component:LoginComponent},
    {path:'verify-otp',component:VerifyOpt},
    {path: '',redirectTo:'login',pathMatch:'full'},
] },

];
