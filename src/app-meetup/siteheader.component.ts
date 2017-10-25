import { Component } from '@angular/core';
import { AuthenticationProvider } from './authenticationprovider';
import { Router } from '@angular/router';
import { authenticatePath } from './routes';

@Component({
  selector: 'site-header',
  template: '<div style="text-align: right"><span *ngIf="(authenticationInfo | async)?.isAuthenticated">Logged in as {{(authenticationInfo | async)?.user.FullName}} | <a (click)="logOut()">Log out</a></span><span *ngIf="!(authenticationInfo | async)?.isAuthenticated"><a (click)="logIn()">Log in</a></span></div><hr/>'
}) // <span *ngIf="isAuthenticated">Logged in</span>
export class SiteHeaderComponent {
    authenticationInfo: Promise<any>;
    authenticatedName: string;

    constructor(private authenticationProvider: AuthenticationProvider, private router: Router) {
        this.authenticationInfo = this.authenticationProvider.getAuthenticationInfo();
    }

    private logOut() {
        this.authenticationProvider.removeAuthentication();
        this.router.navigate([`/${authenticatePath}`]);
    }

    private logIn() {
        this.router.navigate([`/${authenticatePath}`]);
    }
}
