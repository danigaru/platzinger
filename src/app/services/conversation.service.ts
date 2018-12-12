import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ConversationService {

    constructor(
        private angularFireDatabase: AngularFireDatabase,
        private _httpClient: HttpClient
    ) { }

    createConversation( conversation ) {
        return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp ).set(conversation);
    }

    getConversation( uid: string) {
        return this.angularFireDatabase.list( 'conversations/' + uid );
    }

    editConversation( conversation ) {
        return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp ).set(conversation);
    }
}
