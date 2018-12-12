import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { UserService } from '../../services/user.service';
import { RequestService } from 'src/app/services/request.service';

export interface PromptModel {
  scope: any;
  currentRequest: any;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent extends DialogComponent<PromptModel, any> implements PromptModel {

   scope: any;
   currentRequest: any;
   shouldAdd = 'yes';

  constructor(
    private _dialogService:  DialogService,
    private _userService: UserService,
    private _requestService: RequestService
    ) {
      super(_dialogService);
  }

  accept( ) {
    if ( this.shouldAdd == 'yes' ) {
      this._requestService.setRequestStatus( this.currentRequest, 'accepted' )
          .then( ( data ) => {
            this._userService.addFriend( this.scope.user.uid, this.currentRequest.sender )
                .then( data => {
                  alert('Solicitud aceptada');
                })
                .catch( err => console.log(err) );

          })
          .catch( err => console.log('error', err) );
    } else if ( this.shouldAdd == 'no' ) {
      this._requestService.setRequestStatus( this.currentRequest, 'rejected' )
          .then( ( data ) => {

          })
          .catch( err => console.log('error', err) );
    } else if ( this.shouldAdd == 'later' ) {
      this._requestService.setRequestStatus( this.currentRequest, 'later' )
          .then( ( data ) => {

          })
          .catch( err => console.log('error', err) );
    }
  }

}
