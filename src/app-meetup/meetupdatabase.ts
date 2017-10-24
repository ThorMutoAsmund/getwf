import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeetupDatabase {    
    private userCollection: AngularFirestoreCollection<any>;
    private users: Observable<any[]>

    constructor(private afs: AngularFirestore) {
        this.userCollection = this.afs.collection<any>('/Users');
        this.users = this.userCollection.valueChanges();
    }

    public findUser(userName: string):Promise<any> {
        return new Promise((resolve, reject) => {
            this.afs.doc(`Users/${userName}`).valueChanges().subscribe(item =>
            {
                resolve(item);
            });
        });
    }

    public updateUserToken(userName: string, token: string): Promise<void> {
        return this.afs.collection('Users').doc(userName).update({ Token:token });
    }

    public createUser(userName: string, fullName: string, password: string): Promise<void> {
        return this.afs.collection('Users').doc(userName).set({ FullName: fullName, Password: password });
    }
}