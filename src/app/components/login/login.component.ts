import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private _autenticationService: AuthenticationService,
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    this._autenticationService.loginWithEmail( this.email, this.password  )
        .then( (user) => {
          console.log('Bienvenido');
          this._router.navigate(['/home']);

        })
        .catch( err => {
          console.log(err);
         });
  }

}
