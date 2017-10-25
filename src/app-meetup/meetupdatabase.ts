import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase/app';

const userTable = 'Users';

@Injectable()
export class MeetupDatabase {    
    private db: database.Database;

    constructor(private angularFireDatabase: AngularFireDatabase) {
        this.db = angularFireDatabase.database;
    }

    public async findUser(userName: string): Promise<any> {
        if (!userName) throw "Null or empty user name";

        return (await this.db.ref(`${userTable}/${userName}`).once('value')).val();
    }

    public updateUserToken(userName: string, token: string): Promise<void> {
        if (!userName) throw "Null or empty user name";

        return this.db.ref(`${userTable}/${userName}`).update({ Token: token });
    }

    public createUser(userName: string, fullName: string, password: string): Promise<void> {
        if (!userName) throw "Null or empty user name";
        if (!password) throw "Null or empty password";

        return this.db.ref(`${userTable}/${userName}`).set({ FullName: fullName, Password: password });
    }
}