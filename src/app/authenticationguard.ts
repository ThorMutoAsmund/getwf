import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable'

import { AuthenticationProvider } from '../app-meetup/authenticationprovider';
import { authenticatePath, createUserPath } from '../app-meetup/routes';

// I have this service , you can use your one
// import { UserService, IUserResponse } from '../authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private authenticationProvider: AuthenticationProvider,
        private router: Router
    ) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log(state.url);
            this.authenticationProvider.authenticationInfo.then(info => {
                if (info.isAuthenticated && state.url === `/${authenticatePath}`) {
                    this.router.navigate(['']);
                    resolve(false);
                }
                else if (!info.isAuthenticated && state.url === `/${authenticatePath}`) {
                    resolve(true);
                }
                else if (state.url === `/${createUserPath}`) {
                    resolve(true);
                }
                else if (info.isAuthenticated) {
                    resolve(true);
                }
                else {
                    this.router.navigate([`./${authenticatePath}`]);
                    resolve(false);
                }
            })
        });
    }
}
