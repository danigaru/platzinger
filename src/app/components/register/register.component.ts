import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  uid: string;
  user: User;
  constructor(
    private _authenticacionService: AuthenticationService,
    private _Router: Router,
    private _userService: UserService
  ) {
  }

  ngOnInit() {
  }

  register() {
      this._authenticacionService.registerWithEmail( this.email, this.password )
          .then( (user) => {

            this.uid = user['user']['uid'];

            this.user = {
              nick: '',  subnick: '', age: 0, email: this.email, friend: false, uid: this.uid 
            };

            this._userService.createUser( this.user )
            .then( usuarioR => {
              console.log(usuarioR);
            }).catch( err => console.log(err));

            alert('Registrado correctamente');
            setTimeout(() => {
              this._Router.navigate(['/login']);
            }, 3000);

          })
          .catch( err => console.log(err) );
  }

}
