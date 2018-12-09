import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/user.interface';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;
  status: boolean;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  picture: any;

  constructor(
    private _userService:  UserService,
    private _authentication: AuthenticationService,
    private _firebaseStorage: AngularFireStorage
  ) {
        this.status = false;
        this._authentication.getStatus().subscribe( uid => {

          this._userService.getUser( uid['uid'] ).subscribe( (user: User) => {
            this.user = user;
          });

        });
  }

  ngOnInit() {
  }

  updateUser( uid ) {

    if ( this.croppedImage ) {

      const currentPictureId = Date.now();
      const pictures = this._firebaseStorage.ref( 'pictures/' + currentPictureId + '.jpg' ).putString( this.croppedImage, 'data_url' );
      pictures.then( (result) => {
          this.picture = this._firebaseStorage.ref('pictures/' + currentPictureId + '.jpg').getDownloadURL();
          this.picture.subscribe( (p) => {
              this._userService.setAvatar( p, uid )
                  .then( data => {
                      console.log('avatar subido correctamente');
                  }) .catch (err => console.log('error al subir avatar: ', err));
          });
      })
      .catch( err => console.log(err) );


    } else {

      this._userService.updateUser( this.user, uid ).subscribe( userUp => {
        console.log(userUp);
          this.status = true;
          setTimeout(() => {
            this.status =  false;
          }, 3000);
      });
    }

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
}
