import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PagesComponent } from './components/pages.component';

const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent }
    // { path: 'home', component: HomeComponent },
    // { path: 'conversacion/:id', component: ConversationComponent },
    // { path: 'perfil', component: ProfileComponent },
    // { path: '**', pathMatch: 'full', redirectTo: 'login' }

];
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true });
