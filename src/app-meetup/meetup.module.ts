import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CommonModule } from '@angular/common';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, DateAdapter, NativeDateAdapter,
MAT_DATE_FORMATS } from '@angular/material';

import { AuthenticationProvider } from './authenticationprovider';
import { MeetupDatabase } from './meetupdatabase';

import { SiteHeaderComponent } from './siteheader.component';
import { SiteFooterComponent } from './sitefooter.component';
import { MeetupDashboardComponent } from './dashboard.component';
import { MeetupAuthenticateComponent } from './authenticate.component';
import { MeetupTableComponent } from './meetuptable.component';
import { CreateUserComponent } from './createuser.component';
import { EditUserComponent } from './edituser.component';
import { CreateMeetupComponent } from './createmeetup.component';
import { ShowMeetupComponent } from './showmeetup.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './appdateadapter';

import { ToArrayPipe } from './toarray.pipe';

@NgModule({
    imports: [
        FormsModule, CommonModule, Ng2FilterPipeModule,
        BrowserAnimationsModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule
    ],
    declarations: [
        SiteHeaderComponent, SiteFooterComponent, MeetupDashboardComponent, MeetupAuthenticateComponent, 
        CreateUserComponent, EditUserComponent,
        ToArrayPipe,
        MeetupTableComponent, CreateMeetupComponent, ShowMeetupComponent
    ],
    providers: [ 
        AuthenticationProvider,  CookieService, MeetupDatabase,
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ],
    exports: [
        MeetupDashboardComponent, MeetupAuthenticateComponent, CreateUserComponent
    ],
})
export class MeetupModule { }
