import { Routes, RouterModule } from '@angular/router';

// components
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';

const PAGES_ROUTE: Routes = [

    {
        path: '', component: PagesComponent,
        children: [

            { path: 'home', component: HomeComponent },
            { path: 'conversacion/:id', component: ConversationComponent },
            { path: 'perfil', component: ProfileComponent },
            { path: '**', pathMatch: 'full', redirectTo: '/home' }
        ]
    }

];

export const PAGES_ROUTING = RouterModule.forChild( PAGES_ROUTE );
