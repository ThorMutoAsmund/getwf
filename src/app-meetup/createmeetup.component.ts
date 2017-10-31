import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { MeetupDatabase } from './meetupdatabase';
import yeast from 'yeast';

@Component({
    selector: 'create-meetup',
    templateUrl: './createmeetup.component.html',
})
export class CreateMeetupComponent {
    constructor(private meetupDatabase: MeetupDatabase, private router: Router) {
    }

    @ViewChild('userForm') userForm;

    createStep = 0;
    selectedInformationType: any;
    informationBlocks = [];
    stepTitles = ["1. General info", "2. Information blocks"];
    accessOptions = [{id:1,name:"Anyone with the link"},{id:2,name:"Only authenticated users"}];
    informationOptions = [{type:1,name:"Calendar dates (and times)"}];

    locationSelected = false;
    startDate = new Date(2018,2);

    isSubmitting: boolean;

    ngOnInit() {
        this.selectedInformationType = this.informationOptions[0];
    }

    datepickerFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    }

    stepBack() {
        if (this.createStep > 0) {
            this.createStep--;
        }
        console.log(this.createStep);
        console.log(this.userForm.value);
    }

    addDateOption(block) {
        let dateId = yeast();
        block.dateIds.push(dateId);
    }

    removeDateOption(block: any, dateId: string) {
        block.dateIds = block.dateIds.filter(e => e !== dateId);
    }

    addBlock() {
        let blockId = yeast();
        let dateId = yeast();
        this.informationBlocks.push({ id: blockId, type: this.selectedInformationType.type, name: this.selectedInformationType.name, dateIds:[ dateId ] });
    }

    removeBlock(block) {
        this.informationBlocks = this.informationBlocks.filter(e => e.id !== block.id);
    }

    async onFormSubmit(form) {
        console.log(form.value);
        if (this.createStep < this.stepTitles.length - 1) {
            this.createStep++;
        }
        else {

        }
        // let result;
        // try {
        //     this.isSubmitting = true;
        //     result = await this.authenticationProvider.createAndAuthenticateUser(form.value.userName, form.value.fullName, form.value.password)
        // }
        // catch (reason) {
        //     this.isSubmitting = false;
        //     alert(reason);
        //     return;
        // }

        // this.isSubmitting = false;
        // if (result) {
        //     this.router.navigate(['/dashboard']);
        // }
        // else {
        //     alert("Could not create user. Maybe the user name has already been taken?");
        // }
    }  
}
