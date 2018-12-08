import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    friends: any = [
        { nick: 'Juan', subnick: '@juan', age: 20,  email: 'juan@gmail.com', friend: true, uid: 1 },
        { nick: 'Pedro', age: 22,  email: 'pedro@hotmail.com', friend: false, uid: 2 },
        { nick: 'Luis',  age: 26,  email: 'luis@hotmail.com', friend: true, uid: 3 },
        { nick: 'Daniel', age: 45, email: 'daniel@gmail.com',  friend: false, uid: 4 },
        { nick: 'Danilo', age: 22, email: 'danilo@gmail.com',  friend: true, uid: 5 },
      ];

    constructor() {
        console.log('servicio corriendo');
    }

    getFriends() {
        return this.friends;
    }

}
