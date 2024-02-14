import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: { id: number; content: string; sentBy: 'user' | 'server'; timestamp: Date }[] = [];

  constructor() { }

  getMessages() {
    return this.messages;
  }

  addMessage(message: { content: string; sentBy: 'user' | 'server' }) {
    const newMessage = {
      id: this.messages.length + 1,
      timestamp: new Date(),
      ...message
    };
    this.messages.push(newMessage);
  }
}
