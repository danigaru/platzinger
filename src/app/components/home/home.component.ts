import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  query: string;
  usuario: User[];
  user: User;

  constructor(
    private userService: UserService,
    private _authentication: AuthenticationService,
    private _router: Router
  ) {

      // this.usuario = this.userService.getFriends();
      this.userService.getUsers().subscribe( (user: User[]) => {
          this.usuario = user;

          console.log(user);
      });
      this._authentication.getStatus().subscribe( user => {
          console.log(user.uid);
          this.userService.getUser(user['uid']).subscribe( (data: User) => {
            console.log(data['nick']);
            this.user = data;
          });
      });

  }

  ngOnInit() {
  }

}
