import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatModel } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  form: FormGroup;
  chatModel = new ChatModel();
  messages: string[] = [];

  constructor(private chatService: ChatService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    this.chatService.newUserJoined().subscribe(
      (data) => {
        console.log('new user joined --- ', data);
        this.messages.push(data.message);
      }
    );

    this.chatService.userLeftEvent().subscribe(
      (data) => {
        this.messages.push(data.message);
      }
    );
  }
  initializeForm() {
    const {userName, roomName} = this.chatModel;
    this.form = this.fb.group({
      userName: [userName, []],
      roomName: [roomName, []],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  join() {
    // this.chatService.joinRoom();
  }

  onSubmit() {
    const chatModel = this.form.value as ChatModel;
    const {userName, roomName} = chatModel;
    this.chatService.joinRoom(userName, roomName);
  }

  leftRoom() {
    const chatModel = this.form.value as ChatModel;
    const {userName, roomName} = chatModel;
    this.chatService.userLeft(userName, roomName);
  }

}
