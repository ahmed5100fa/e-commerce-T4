import { Route } from "@angular/router";
export const authRouters : Route[]=
[
{path: '',loadComponent:()=>import('../../layouts/auth layout/authlayout').then(m=>m.Authlayout),
    children:[
    {path: 'login',loadComponent:()=>import('./pages/logincomponent/logincomponent').then(m=>m.LoginComponent)},
    {path:'forget-password', loadComponent:()=>import('./pages/forgetPassword/forgetPassword').then(m=>m.ForgetPassword)},
     {
        path: 'register',
        loadComponent: () =>
          import('../auth/register/register').then(
            (m) => m.RegisterComponent,
          ),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
]
}
];
