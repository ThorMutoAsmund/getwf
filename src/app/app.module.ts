import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MeetupModule } from '../app-meetup/meetup.module';

import { AuthenticationProvider } from '../app-meetup/authenticationprovider';
import { MeetupDatabase } from '../app-meetup/meetupdatabase';

import { PageNotFoundComponent } from './pagenotfound.component';

import { appRoutes } from './routing';
import { firebaseConfig } from './firebaseconfig';
import { AuthenticationGuard } from './authenticationguard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MeetupModule
  ],
  providers: [ AuthenticationProvider, AuthenticationGuard, CookieService, MeetupDatabase ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
