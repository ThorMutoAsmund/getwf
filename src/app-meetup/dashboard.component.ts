import { Component, Input } from '@angular/core';
import { MeetupDatabase } from './meetupdatabase';
import { AuthenticationProvider } from './authenticationprovider';
import { Router } from '@angular/router';
import { showMeetupPath, createMeetupPath } from './routes';

@Component({
  selector: 'meetup-dashboard',
  templateUrl: './dashboard.component.html'
})
export class MeetupDashboardComponent {

    meetups: Promise<object[]>;
    isClosed = { value: { Closed: true } };
    isNotClosed = { value: { Closed: false } };

    constructor(private meetupDatabase: MeetupDatabase, private authenticationProvider: AuthenticationProvider, 
        private router: Router) {
        this.meetups = this.meetupDatabase.getMeetupsForUser(this.authenticationProvider.getUserName());
    }

    public showMeetup(id: string) {
        this.router.navigate([`/${showMeetupPath}/${id}`]);
    }
    public createRegularMeetup() {
        this.router.navigate([`/${createMeetupPath}`]);
    }
}
