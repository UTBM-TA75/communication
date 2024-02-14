import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';
import { ConversationBubbleComponent } from '../conversation-bubble/conversation-bubble.component';
import { ChatService } from '@core/services/chat.service';
import { Message } from '@core/models';
import { AuthService } from '@core/services/auth.service'; // Vérifiez que le chemin est correct

@Component({
  selector: 'app-conversation-feed',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    DatePipe,
    ConversationBubbleComponent,
  ],
  templateUrl: './conversation-feed.component.html',
  styleUrls: ['./conversation-feed.component.scss'],
})
export class ConversationFeedComponent {
  @Input() messages: Message[] = [];

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
  ) {}

  isUserMessage(messageId: number): boolean {
    return this.authService.user.id == messageId;
  }
}
