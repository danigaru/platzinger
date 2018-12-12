import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class UserService {

      urlData = 'https://heroesappli.firebaseio.com/users.json';
      urlDataUser = 'https://heroesappli.firebaseio.com/users';
      name: string;

    constructor(
        private _httpClient: HttpClient,
        private _angularFireDatabase: AngularFireDatabase
    ) { }

    createUser( user ) {
        return this._angularFireDatabase.object( '/users/' + user.uid ).set(user);
    }

    getUsers() {
        return this._httpClient.get( this.urlData );
    }

    getUser( id: string) {

        const url = `${ this.urlDataUser }/${ id }.json`;
        return this._httpClient.get( url );
    }

    updateUser( user, id: string ) {
        const body = JSON.stringify( user );

        const headers: any = new Headers({
            'Content-type': 'application/json'
        });

        const url = `${ this.urlDataUser }/${ id }.json`;

        return this._httpClient.put( url, body, { headers } );
    }

    setAvatar( avatar: string, uid: string ) {

        return this._angularFireDatabase.object( '/users/' + uid + '/avatar/' ).set(avatar);

    }

    addFriend( userId, friendId) {
        this._angularFireDatabase.object( '/users/' + userId + '/friends/' + friendId ).set( friendId );
        return this._angularFireDatabase.object( 'users/' + friendId + '/friends/' + userId ).set( userId );
    }

}
