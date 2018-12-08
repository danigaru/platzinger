import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  query: string;

  usuario: User = {
    nick: '',
    subnick: '',
    age: 0,
    email: '',
    friend: false
  };

  constructor(
    private userService: UserService
  ) {

      this.usuario = this.userService.getFriends();

  }


  ngOnInit() {
  }

}
