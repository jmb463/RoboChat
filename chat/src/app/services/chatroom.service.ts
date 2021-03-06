import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable()
export class ChatroomService {
  
public chatrooms: Observable <any>

  constructor(private db:AngularFirestore) {
    this.chatrooms=db.collection('chatrooms').valueChanges();
   }
}
