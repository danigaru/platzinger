import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { RequestService } from './services/request.service';
import { User } from './interfaces/user.interface';
import { DialogService } from 'ng2-bootstrap-modal';
import { RequestComponent } from './modals/request/request.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzinger';
  user: User;
  request: any[] = [];
  mailsShown: any[] = [];

  constructor(
    private _authenticationService: AuthenticationService,
    private _userService: UserService,
    private _requestService: RequestService,
    private _dialogService: DialogService
  ) {

    this._authenticationService.getStatus()
        .subscribe( status => {
          this._userService.getUser( status['uid'] ).subscribe( (data: User) => {
            this.user = data;
            this._requestService.getRequestForEmail( this.user['email'] ).valueChanges()
                .subscribe( (request: any) => {
                    this.request = request;
                    console.log('request: ', this.request);
                     this.request = this.request.filter( (respuesta) => {
                       return respuesta.status !== 'accepted' && respuesta.status !== 'rejected';
                     });

                     this.request.forEach( (r) => {
                       if ( this.mailsShown.indexOf( r.sender) === -1) {
                         this.mailsShown.push( r.sender );
                         this._dialogService.addDialog( RequestComponent, { scope: this, currentRequest: r } );
                       }
                     });
                }, err => console.log(err));
          });
        });

  }
}
