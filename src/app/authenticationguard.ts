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

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (state.url === `/${createUserPath}`) {
            return true;
        }
        else {
            let info = await this.authenticationProvider.getAuthenticationInfo();
            if (info.isAuthenticated && state.url === `/${authenticatePath}`) {
                this.router.navigate(['']);
                return false;
            }
            else if (!info.isAuthenticated && state.url === `/${authenticatePath}`) {
                return true;
            }
            else if (info.isAuthenticated) {
                return true;
            }
            else {
                this.router.navigate([`./${authenticatePath}`]);
                return false;
            }
        }
    }

    // canA2ctivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    //     return new Promise(async (resolve, reject) => {
    //         if (state.url === `/${createUserPath}`) {
    //             resolve(true);
    //         }
    //         else {
    //             let info = await this.authenticationProvider.getAuthenticationInfo();
    //             if (info.isAuthenticated && state.url === `/${authenticatePath}`) {
    //                 this.router.navigate(['']);
    //                 resolve(false);
    //             }
    //             else if (!info.isAuthenticated && state.url === `/${authenticatePath}`) {
    //                 resolve(true);
    //             }
    //             else if (info.isAuthenticated) {
    //                 resolve(true);
    //             }
    //             else {
    //                 this.router.navigate([`./${authenticatePath}`]);
    //                 resolve(false);
    //             }
    //         }
    //     });
    // }
}
