import { Component } from '@angular/core';
import { AuthenticationProvider } from './authenticationprovider';
import { Router } from '@angular/router';

@Component({
    selector: 'meetup-authenticate',
    templateUrl: './authenticate.component.html'
})
export class MeetupAuthenticateComponent {
    constructor(private authenticationProvider: AuthenticationProvider, private router: Router) {
    }

    isSubmitting: boolean;

    onFormSubmit(form) {
        this.isSubmitting = true;
        this.authenticationProvider.authenticate(form.value.userName, form.value.password).then(result => {
            this.isSubmitting = false;
            if (result) {
                this.router.navigate(['/dashboard']);
            }
            else {
                alert("Authentication failed");
            }
        });
    }
}
