import { RouterModule, Routes } from '@angular/router';

import { MeetupDashboardComponent } from '../app-meetup/dashboard.component';
import { MeetupAuthenticateComponent } from '../app-meetup/authenticate.component';
import { CreateUserComponent } from '../app-meetup/createuser.component';
import { EditUserComponent } from '../app-meetup/edituser.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { CreateMeetupComponent } from '../app-meetup/createmeetup.component';
import { ShowMeetupComponent } from '../app-meetup/showmeetup.component';

import { authenticatePath, createMeetupPath, showMeetupPath } from '../app-meetup/routes';
import { AuthenticationGuard } from './authenticationguard';

export const appRoutes: Routes = [
    { path: '', canActivate:[AuthenticationGuard], children: [
        { path: authenticatePath, component: MeetupAuthenticateComponent },
        { path: 'dashboard', component: MeetupDashboardComponent },
        { path: 'createuser', component: CreateUserComponent },
        { path: 'edituser', component: EditUserComponent },
        { path: createMeetupPath, component: CreateMeetupComponent },
        { path: `${showMeetupPath}/:id`, component: ShowMeetupComponent },
        // {
        //   path: 'heroes',
        //   component: HeroListComponent,
        //   data: { title: 'Heroes List' }
        // },
        { path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        { path: '**', component: PageNotFoundComponent }
          ]}
  ];
  