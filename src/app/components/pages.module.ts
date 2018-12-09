import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routes
import { PAGES_ROUTING } from './pages.routes';

// services
import { UserService } from '../services/user.service';

// pipes
import { SearchPipe } from '../pipes/search.pipe';


// components
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NavbarComponent } from './menu/navbar.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProfileComponent,
        ConversationComponent,
        NavbarComponent,
        SearchPipe,
    ],
    exports: [
        PagesComponent,
        NavbarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        PAGES_ROUTING,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        UserService
    ]
})

export class PagesModule {}