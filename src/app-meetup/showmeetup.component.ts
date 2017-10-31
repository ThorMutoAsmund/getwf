import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'show-meetup',
    templateUrl: './showmeetup.component.html',
})
export class ShowMeetupComponent {
    constructor(private router: Router) {
    }
}
