import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  query: string;
  usuario: User[];
  user: User;
  friendEmail: string;
  closeResult: string;
  userUid: string;
  constructor(
    private userService: UserService,
    private _authentication: AuthenticationService,
    private _router: Router,
    private modalService: NgbModal,
    private _requestService: RequestService
  ) {

      // this.usuario = this.userService.getFriends();
      this.userService.getUsers().subscribe( (user: User[]) => {
          this.usuario = user;
      });
      this._authentication.getStatus().subscribe( user => {
          console.log(user.uid);
          this.userUid = user['uid'];
          this.userService.getUser(user['uid']).subscribe( (data) => {

            // this.user = data;
            // console.log(data);
            // if ( this.user['friends']) {
            //   this.user['friends'] = Object.values(this.user['friends']);
            //   console.log(this.user);
            // }
          });
      });

  }

  ngOnInit() {
  }

  sendRequest( ) {
      const request = {
        timestamp: Date.now(),
        receiver: this.friendEmail,
        sender: this.user['uid'],
        status: 'pending'
      };

      this._requestService.createRequest( request )
      .then( () => {
          alert('Solicitud enviada');
      })
      .catch( err => alert('Ocurrio un error' + err) );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 'terminado';
    });
  }

}
