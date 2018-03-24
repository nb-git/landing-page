import {Injectable} from '@angular/core';
import {Message} from './message';

@Injectable()
export class MessageService {

  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  removeMessage(message: Message) {
    const msgIndex = this.messages.indexOf(message, 0);
    if (msgIndex > -1) {
      this.messages.splice(msgIndex, 1);
    }
  }

}
