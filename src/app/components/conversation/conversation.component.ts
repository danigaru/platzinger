import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { ConversationService } from '../../services/conversation.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  uidConnect: string;
  uid: any;
  user: User;
  date = new Date();
  fecha = new Date().getDay();
  dia;
  ex;
  hora = new Date().getHours();
  minutos = new Date().getMinutes();
  conversion_id: string;
  textMessage: string;
  conversions: any[];
  nickUser: string;
  shake = false;
  usuarioL: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private userService: UserService,
    private _conversationService: ConversationService,
    private _authentication: AuthenticationService
  ) {
    if ( this.fecha === this.date.getDay() ) {
       this.dia = 'hoy';
    }

    if ( this.hora >= 12 ) {
      this.ex = 'pm' ;
    } else {
      this.ex = 'am';
    }

      this._authentication.getStatus().subscribe( userId => {

          this.uidConnect = userId['uid'];

          this._activatedRoute.params.subscribe( urlId =>  {
            this.uid = urlId['id'];

            const ids = [ this.uidConnect, this.uid ].sort();
            this.conversion_id = ids.join('|');

            this.getConversation();

            this.userService.getUser( this.uid ).subscribe( (data: any) => {
              this.user = data;
            });

            this.userService.getUser( this.uidConnect ).subscribe( (data: any) => {
               this.usuarioL = data;
              this.nickUser = data['nick'];

            });
          });
      });
  }

  ngOnInit() {
  }

  sendMessage() {

    const message = {
        uid: this.conversion_id ,
        timestamp: Date.now(),
        text: this.textMessage,
        sender: this.uidConnect,
        receiver: this.uid,
        type: 'text'
    };
    this._conversationService.createConversation( message )
        .then( () => {
          this.textMessage = '';
        });
  }

  sendZumbido() {

    const message = {
        uid: this.conversion_id ,
        timestamp: Date.now(),
        text: null,
        sender: this.uidConnect,
        receiver: this.uid,
        type: 'zumbido'
    };
    this._conversationService.createConversation( message )
        .then( () => {
        });

        this.doZumbido();
  }

  doZumbido() {
    const audio = new Audio('assets/sound/zumbido.m4a');
    audio.play();
    this.shake = true;
    setTimeout(() => {
        this.shake = false;
    }, 1000);
  }

  getConversation() {
    this._conversationService.getConversation( this.conversion_id ).valueChanges()
        .subscribe( messages => {
          console.log(messages);
          this.conversions = messages;

          this.conversions.forEach( (message) => {
              if ( !message.seen ) {
                message.seen = true;
                if ( message.type === 'text' ) {
                  this._conversationService.editConversation( message );

                  const audio =  new Audio('assets/sound/new_message.m4a');
                  audio.play();
                } else if ( message.type === 'zumbido' ) {
                  message.text = 'Hey Chateamos!';
                  message.receiver = this.uid;
                  this._conversationService.editConversation( message );
                  this.doZumbido();
                }
              }
          });
        }, err => console.log(err));
  }

  getserNickById( id ) {
    if ( id === this.uid ) {
      return this.user['nick'];
    } else {

      return this.nickUser;
    }
  }

}
