import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';
import { stringify } from '@angular/core/src/render3/util';
@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private socket = io('http://localhost:3000');
  constructor() { }

  joinRoom(userName: string, roomName: string) {
    console.log(`username : ${userName}, roomname : ${roomName}`);
    const data = {userName, roomName};
    this.socket.emit('join', data);
  }

  newUserJoined() {
    const observable = new Observable<{userName: string, message: string}>(
      (observer) => {
        this.socket.on('new user joined', (data) => {
          observer.next(data);
        });
        return () => {this.socket.disconnect(); };
      });
    return observable;
  }
  userLeft(userName: string, roomName: string) {
    console.log(`username : ${userName}, roomname : ${roomName}`);
    const data = {userName, roomName};
    this.socket.emit('leave', data);
  }
  userLeftEvent() {
    const observable = new Observable<{userName: string, message: string}>(
      (observer) => {
        this.socket.on('left room', (data) => {
          observer.next(data);
        });
        return () => {this.socket.disconnect(); };
      });
    return observable;
  }
}
