import { Route } from "@angular/router";
export const authRouters : Route[]=
[
{path: '',loadComponent:()=>import('../../layouts/auth layout/authlayout').then(m=>m.Authlayout),
    children:[
    {path: 'login',loadComponent:()=>import('./logincomponent/logincomponent').then(m=>m.LoginComponent)},
    {path:'forget-password',loadComponent:()=>import('./pages/forgetPassword').then(m=>m.ForgetPassword)},  
    {path: '',redirectTo:'login',pathMatch:'full'}
] }
]