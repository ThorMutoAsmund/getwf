import { Component, ViewChild } from '@angular/core';
import { AuthenticationProvider } from './authenticationprovider';
import { MeetupDatabase } from './meetupdatabase';
import { Router } from '@angular/router';

@Component({
    selector: 'edit-user',
    templateUrl: './edituser.component.html',
})
export class EditUserComponent {
    constructor(private authenticationProvider: AuthenticationProvider,  private meetupDatabase: MeetupDatabase,
        private router: Router) {
    }

    @ViewChild('userForm') userForm;

    async ngOnInit() {
        let userName = this.authenticationProvider.getUserName();

        let user = await this.meetupDatabase.findUser(userName);

        if (user) {
            setTimeout(() => {
                this.userForm.form.setValue({
                    userName: userName,
                    fullName: user.FullName ? user.FullName : '',
                    password: user.Password ? user.Password : '',
                    emailAddress: user.EmailAddress ? user.EmailAddress : '' 
                });
            }, 200);
        }
        else {
            this.router.navigate(['/']);
        }
    }

    isSubmitting: boolean;
  
    async onFormSubmit(form) {
        console.log(form);
        console.log(form.controls.password);
        let updatePassword = form.controls.password.pristine === false;

        let userName = this.authenticationProvider.getUserName();
        if (!userName) {
            return;
        }

        let result;
        try {
            this.isSubmitting = true;
            result = await this.authenticationProvider.updateUser(userName, form.value.fullName, form.value.emailAddress, 
                updatePassword ? form.value.password : null)
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
            alert("Could not update user. Please refresh page and try again");
        }
    }  
}
