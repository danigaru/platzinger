import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    constructor(
        private _angularFireDatabase: AngularFireDatabase
    ) {}

    createRequest( request ) {
        const cleanEmail = request.receiver.replace('.', ',');

        return this._angularFireDatabase.object( 'requests/' + cleanEmail + '/' + request.sender).set( request );
    }

    setRequestStatus( request, status ) {
        const cleanEmail = request.receiver.replace('.', ',');
        return this._angularFireDatabase.object( 'requests/' + cleanEmail + '/' + request.sender + '/status').set( status );
    }

    getRequestForEmail( email ) {
        const cleanEmail = email.replace('.', ',');
        return this._angularFireDatabase.list( 'requests/' + cleanEmail );
    }
}
