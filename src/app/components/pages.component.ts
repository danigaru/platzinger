import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html'
})

export class PagesComponent {

    uid: string;

    constructor(
        private _Router: Router,
        private _authentication: AuthenticationService
    ) {

            this._authentication.getStatus().subscribe( data => {


                if ( data) {
                    this.uid = data['uid'];
                } else {
                    this.uid = 'none';
                    this._Router.navigate(['/login']);
                }

            });
    }

}
