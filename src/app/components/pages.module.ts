import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// routes
import { PAGES_ROUTING } from './pages.routes';

// services
import { UserService } from '../services/user.service';
import { ConversationService } from '../services/conversation.service';

// pipes
import { SearchPipe } from '../pipes/search.pipe';


// components
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NavbarComponent } from './menu/navbar.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RequestService } from '../services/request.service';


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
        HttpClientModule,
        ImageCropperModule,
        [NgbModule]
    ],
    providers: [
        UserService,
        ConversationService,
        RequestService
    ]
})

export class PagesModule {}