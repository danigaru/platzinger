import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//  recordar images
import { ImageCropperModule } from 'ngx-image-cropper';

// angular fire 2
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule, FirebaseDatabase } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// modules
import { PagesModule } from './components/pages.module';

// routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

// components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NopagesComponent } from './components/nopages/nopages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    // ImageCropperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
