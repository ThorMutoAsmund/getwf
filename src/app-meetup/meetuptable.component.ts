import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meetup-table',
  templateUrl: './meetuptable.component.html'
})
export class MeetupTableComponent {
    @Input() meetups: object[];
    @Output() onShowMeetup = new EventEmitter<string>();

    constructor() {
    }

    public showMeetup(id: string) {
        this.onShowMeetup.emit(id);
    }
}
