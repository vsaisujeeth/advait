import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [ 'Hi', 'I am chef arora', 'How may I help you?' ];
  outmessages = ['Hello Chef', 'Thank you for your time to chat with me'];
  message: string;
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.outmessages.push(this.message);
    this.message = '';
  }
}
