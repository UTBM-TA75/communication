import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DatePipe} from "@angular/common";
import {ChatBubbleComponent} from "../chat-bubble/chat-bubble.component";

@Component({
  selector: 'app-chat-feed',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    DatePipe,
    ChatBubbleComponent
  ],
  templateUrl: './chat-feed.component.html',
  styleUrl: './chat-feed.component.scss'
})
export class ChatFeedComponent {
  Messages: { id: number; content: string; sentBy: 'user' | 'server'; timestamp: Date }[] = [
    { id: 1, content: 'Bonjour !', sentBy: 'user', timestamp: new Date('2023-12-01T08:30:00Z') },
    { id: 2, content: 'Bonjour, comment ça va ?', sentBy: 'server', timestamp: new Date('2023-12-01T08:35:00Z') },
    { id: 3, content: 'Ça va bien, merci !', sentBy: 'user', timestamp: new Date('2023-12-01T08:40:00Z') },
    { id: 4, content: 'Super, content de l\'entendre !', sentBy: 'server', timestamp: new Date('2023-12-01T08:45:00Z') },
    // ... Ajoutez des dates pour les autres messages
  ];



  isUserMessage(messageId: number): boolean {
    const message = this.Messages.find(msg => msg.id === messageId);
    return message?.sentBy === 'user';
  }
}
