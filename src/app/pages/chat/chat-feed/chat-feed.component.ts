import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { DatePipe } from "@angular/common";
import { ChatBubbleComponent } from "../chat-bubble/chat-bubble.component";
import { ChatService } from '@core/services/chat.service'; // Vérifiez que le chemin est correct

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
  styleUrls: ['./chat-feed.component.scss']
})
export class ChatFeedComponent implements OnInit {
  // Messages statiques initiaux
  initialMessages: { id: number; content: string; sentBy: 'user' | 'server'; timestamp: Date }[] = [
    { id: 1, content: 'Bonjour !', sentBy: 'user', timestamp: new Date('2023-12-01T08:30:00Z') },
    { id: 2, content: 'Bonjour, comment ça va ?', sentBy: 'server', timestamp: new Date('2023-12-01T08:35:00Z') },
    { id: 3, content: 'Ça va bien, merci !', sentBy: 'user', timestamp: new Date('2023-12-01T08:40:00Z') },
    { id: 4, content: 'Super, content de l\'entendre !', sentBy: 'server', timestamp: new Date('2023-12-01T08:45:00Z') }
  ];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // Au démarrage, ajoutez les messages initiaux au service si nécessaire
    // Cette étape est optionnelle, dépendant de si vous voulez ou non que les messages statiques soient gérés par le service également
    this.initialMessages.forEach(message => this.chatService.addMessage(message));
  }

  get Messages() {
    // Combine les messages initiaux avec ceux du service
    // Si les messages initiaux sont déjà ajoutés au service dans ngOnInit, retournez simplement les messages du service
    return this.chatService.getMessages();
  }

  isUserMessage(messageId: number): boolean {
    const message = this.Messages.find(msg => msg.id === messageId);
    return message?.sentBy === 'user';
  }
}
