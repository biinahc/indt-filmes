import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './core/guards/auth-guard';
import { Hero } from './pages/hero/hero';
import { publicGuard } from './core/guards/public-guard';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, canActivate: [publicGuard] },
    { path: 'home', component: Home, canActivate: [ authGuard] }
    
];
