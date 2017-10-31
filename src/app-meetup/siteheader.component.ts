import { Component } from '@angular/core';
import { AuthenticationProvider } from './authenticationprovider';
import { Router } from '@angular/router';
import { authenticatePath } from './routes';

@Component({
  selector: 'site-header',
  templateUrl: './siteheader.component.html' 
})
export class SiteHeaderComponent {
    authenticationInfo: Promise<any>;
    authenticatedName: string;

    constructor(private authenticationProvider: AuthenticationProvider, private router: Router) {
        // Get authinfo. If rejected, catch the error and ignore it. This will give a null object and the header will show "Log in"
        this.authenticationInfo = this.authenticationProvider.getAuthenticationInfo().catch(reason => {});
    }

    private logOut() {
        this.authenticationProvider.removeAuthentication();
        this.router.navigate([`/${authenticatePath}`]);
    }

    private logIn() {
        this.router.navigate([`/${authenticatePath}`]);
    }
}
