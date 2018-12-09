import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {

      urlData = 'https://heroesappli.firebaseio.com/users.json';
      urlDataUser = 'https://heroesappli.firebaseio.com/users';
     urlUserUid = 'https://heroesappli.firebaseio.com/users/-LTFOqhSq71Qb1PNXv4u/uid.json';


    constructor(
        private _httpClient: HttpClient
    ) {
        console.log('servicio corriendo');
    }

    saveUsers( user: User) {

        const body = JSON.stringify( user );

        const headers: any = new Headers({
            'Content-Type': 'application/json'
        });

        return this._httpClient.post( this.urlData, body, { headers} );
    }

    getUsers() {
        return this._httpClient.get( this.urlData );
    }

    getUser( id: string) {

        const url = `${ this.urlDataUser }/${ id }.json`;
        return this._httpClient.get( url );
    }

    getUserUid( id: string, uid: string) {

        const url = `${ this.urlDataUser }/${ id }/${ uid }.json`;
        return this._httpClient.get( url );
    }

}
