import { RouterModule, Routes } from '@angular/router';

import { MeetupDashboardComponent } from '../app-meetup/dashboard.component';
import { MeetupAuthenticateComponent } from '../app-meetup/authenticate.component';
import { CreateUserComponent } from '../app-meetup/createuser.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { authenticatePath } from '../app-meetup/routes';
import { AuthenticationGuard } from './authenticationguard';

export const appRoutes: Routes = [
    { path: '', canActivate:[AuthenticationGuard], children: [
        { path: authenticatePath, component: MeetupAuthenticateComponent },
        { path: 'dashboard', component: MeetupDashboardComponent },
        { path: 'createuser', component: CreateUserComponent },
        // { path: 'hero/:id',      component: HeroDetailComponent },
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
  