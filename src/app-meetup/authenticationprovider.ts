import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import md5 from 'md5';
import { UUID } from 'angular2-uuid';

import { MeetupDatabase } from './meetupdatabase';

const userNameCookieKey = 'userName';
const userTokenCookieKey = 'userToken';

@Injectable()
export class AuthenticationProvider {
    constructor(private cookieService: CookieService, private meetupDatabase: MeetupDatabase) {
    }

    userCache : object = {};
    
    private setAuthCookies(userName: string, token: string) {
        this.cookieService.put(userNameCookieKey, userName);
        this.cookieService.put(userTokenCookieKey, token);
    }

    get authenticationInfo() : Promise<any> {
        return new Promise((resolve, reject) => {
            let userName = this.cookieService.get(userNameCookieKey);
            if (!userName || userName === '') {
                resolve({isAuthenticated:false});
                return;
            }
            
            let token = this.cookieService.get(userTokenCookieKey);
            if (!token || token === '') {
                resolve({isAuthenticated:false});
                return;
            }

            if (this.userCache[userName] && this.userCache[userName].Token === token) {
                resolve({isAuthenticated:true, user:this.userCache[userName]});
                return;
            }
    
            this.meetupDatabase.findUser(userName).then(user => {
                if (user && user.Token === token) {
                    this.userCache[userName] = user;
                    resolve({isAuthenticated:true, user:user});
                }
                else {
                    resolve({isAuthenticated:false});
                }
            });
        });
    }

    public authenticate(userName: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.meetupDatabase.findUser(userName).then(user => {
                if (user && user.Password === md5(password)) {
                    let token = UUID.UUID();

                    this.setAuthCookies(userName, token);
                    
                    this.meetupDatabase.updateUserToken(userName, token);

                    this.userCache[userName] = user;
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    }

    public removeAuthentication() {
        this.cookieService.remove(userNameCookieKey);
        this.cookieService.remove(userTokenCookieKey);
        //delete this.userCache[userName];
    }
    
    public createAndAuthenticateUser(userName: string, fullName: string,  password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.meetupDatabase.findUser(userName).then(user => {
                if (user) {
                    resolve(false);
                }
                else {
                    this.meetupDatabase.createUser(userName, fullName, md5(password)).then(() => {
                        let token = UUID.UUID();
    
                        this.setAuthCookies(userName, token);
            
                        this.meetupDatabase.updateUserToken(userName, token);
    
                        //this.userCache[userName] = user;
                        resolve(true);
                    });
                }
            });
        });
    }
}
