import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _angularFireAuth: AngularFireAuth
  ) { }

  loginWithEmail( email: string, password: string ) {
    return this._angularFireAuth.auth.signInWithEmailAndPassword( email, password );
  }

  registerWithEmail( email: string, password: string ) {
    return this._angularFireAuth.auth.createUserWithEmailAndPassword( email, password );
  }

  getStatus() {
    return this._angularFireAuth.authState;
  }

  logout() {
    return this._angularFireAuth.auth.signOut();
  }
}
