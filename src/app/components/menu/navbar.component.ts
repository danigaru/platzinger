import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

    uid: string;

    constructor(
        private _Router: Router,
        private _authentication: AuthenticationService
    ) {
        console.log(this._Router.url);

        this._authentication.getStatus().subscribe( data => {


            if ( data) {
                this.uid = data['uid'];
            } else {
                this.uid = 'none';
                this._Router.navigate(['/login']);
            }


        });
    }

    ngOnInit() {}
}
