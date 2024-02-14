import { Injectable } from '@angular/core';
import { Message } from "@core/models";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: Message[] = [
    { id: 1, content: 'Bonjour !', sentBy: 1, sentAt: new Date('2023-12-01T08:30:00Z') },
    { id: 2, content: 'Bonjour, comment ça va ?', sentBy: 2, sentAt: new Date('2023-12-01T08:35:00Z') },
    { id: 3, content: 'Ça va bien, merci !', sentBy: 1, sentAt: new Date('2023-12-01T08:40:00Z') },
    { id: 4, content: 'Super, content de l\'entendre !', sentBy:2, sentAt: new Date('2023-12-01T08:45:00Z') }
  ];

  constructor() { }

  getMessages() {
    return this.messages;
  }

  addMessage(message: { content: string; sentBy: number }) {
    const newMessage: Message = {
      ...message,
      id: this.messages.length + 1,
      sentAt: new Date()
    };
    this.messages.push(newMessage);
  }
}
