import { Component } from '@angular/core';
import { AuthenticationProvider } from './authenticationprovider';
import { Router } from '@angular/router';

@Component({
    selector: 'create-user',
    templateUrl: './createuser.component.html',
})
export class CreateUserComponent {
    constructor(private authenticationProvider: AuthenticationProvider, private router: Router) {
    }

    isSubmitting: boolean;
  
    async onFormSubmit(form) {
        let result;
        try {
            this.isSubmitting = true;
            result = await this.authenticationProvider.createAndAuthenticateUser(form.value.userName, form.value.fullName, form.value.password)
        }
        catch (reason) {
            this.isSubmitting = false;
            alert(reason);
            return;
        }

        this.isSubmitting = false;
        if (result) {
            this.router.navigate(['/dashboard']);
        }
        else {
            alert("Could not create user. Maybe the user name has already been taken?");
        }
    }  
}
