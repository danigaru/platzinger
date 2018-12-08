import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  users: any;
  uid: any;
  user: User;
  date = new Date();
  fecha = new Date().getDay();
  dia;
  ex;
  hora = new Date().getHours();
  minutos = new Date().getMinutes();
  constructor(
    private _activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    if ( this.fecha === this.date.getDay() ) {
       this.dia = 'hoy';
    }

    if ( this.hora >= 12 ) {
      this.ex = 'pm' ;
    } else {
      this.ex = 'am';
    }

      this._activatedRoute.params.subscribe( urlId =>  {
        this.uid = urlId['id'];
        this.users = this.userService.getFriends();

        this.user = this.users.find( (user: User) => user.uid == this.uid );

        console.log(this.user);
      });

  }

  ngOnInit() {
  }

}
