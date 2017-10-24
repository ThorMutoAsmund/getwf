import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CommonModule } from '@angular/common';

import { AuthenticationProvider } from './authenticationprovider';
import { MeetupDatabase } from './meetupdatabase';

import { SiteHeaderComponent } from './siteheader.component';
import { MeetupDashboardComponent } from './dashboard.component';
import { MeetupAuthenticateComponent } from './authenticate.component';
import { CreateUserComponent } from './createuser.component';

@NgModule({
    imports: [
        FormsModule, CommonModule
    ],
    declarations: [
        SiteHeaderComponent, MeetupDashboardComponent, MeetupAuthenticateComponent, CreateUserComponent
    ],
    providers: [ 
        AuthenticationProvider,  CookieService, MeetupDatabase 
    ],
    exports: [
        MeetupDashboardComponent, MeetupAuthenticateComponent, CreateUserComponent
    ],
})
export class MeetupModule { }
