import { Component, Input } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { DatePipe } from "@angular/common";
import { ChatBubbleComponent } from "../chat-bubble/chat-bubble.component";
import { ChatService } from '@core/services/chat.service';
import { Message } from "@core/models"; // Vérifiez que le chemin est correct

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
export class ChatFeedComponent {
  @Input() messages: Message[] = [];

  constructor(private chatService: ChatService) { }

  isUserMessage(messageId: number): boolean {
    const message = this.messages.find(msg => msg.id === messageId);
    return true;
  }
}
