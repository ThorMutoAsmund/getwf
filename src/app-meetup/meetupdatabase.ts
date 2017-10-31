import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase/app';

const userTable = 'Users';
const meetupTable = 'Meetups';

@Injectable()
export class MeetupDatabase {    
    private db: database.Database;

    constructor(private angularFireDatabase: AngularFireDatabase) {
        this.db = angularFireDatabase.database;
    }

    private toArray(value: object): object[] {
        if (!value) return [];
        return Object.keys(value).map(function (key) { return {key, value:value[key]}; });
    }

    public async findUser(userName: string): Promise<any> {
        if (!userName) throw "Null or empty user name";

        return (await this.db.ref(`${userTable}/${userName}`).once('value')).val();
    }

    public updateUserToken(userName: string, token: string): Promise<void> {
        if (!userName) throw "Null or empty user name";

        return this.db.ref(`${userTable}/${userName}`).update({ Token: token });
    }

    public createUser(userName: string, fullName: string, emailAddress: string, password: string): Promise<void> {
        if (!userName) throw "Null or empty user name";
        if (!fullName) throw "Null or empty full name";
        if (!emailAddress) throw "Null or empty email address";
        if (!password) throw "Null or empty password";

        return this.db.ref(`${userTable}/${userName}`).set({ FullName: fullName, EmailAddress: emailAddress, Password: password });
    }

    public updateUser(userName: string, fullName: string | null, emailAddress: string | null, password: string | null): Promise<boolean> {
        if (!userName) throw "Null or empty user name";

        let updateValues = {};
        if (fullName !== null) {
            updateValues['FullName'] = fullName;
        }
        if (emailAddress !== null) {
            updateValues['EmailAddress'] = emailAddress;
        }
        if (password !== null) {
            updateValues['Password'] = password;
        }

        return this.db.ref(`${userTable}/${userName}`).update(updateValues);
    }

    public async getMeetupsForUser(userName: string): Promise<any[]> {
        return this.toArray((await this.db.ref(`${meetupTable}/${userName}`).once('value')).val());
    }
}