import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modules
import { PagesModule } from './components/pages.module';

// routes
import { APP_ROUTING } from './app.routes';

// services
// import { UserService } from './services/user.service';

// pipes
// import { SearchPipe } from './pipes/search.pipe';

import { AppComponent } from './app.component';

// components
import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { ConversationComponent } from './components/conversation/conversation.component';
// import { NavbarComponent } from './components/menu/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // HomeComponent,
    // ProfileComponent,
    // ConversationComponent,
    // NavbarComponent,
    // SearchPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    // FormsModule
  ],
  providers: [
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
