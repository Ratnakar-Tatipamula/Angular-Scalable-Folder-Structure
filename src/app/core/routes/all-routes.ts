import { Routes } from "@angular/router";

export const ALL_ROUTES: Routes = [
    {
        path: "",
        loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) 
        
    }
]


// { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }