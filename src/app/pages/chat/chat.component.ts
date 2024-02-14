import { Component, OnInit } from '@angular/core';
import { ConversationFeedComponent } from '@shared/components/conversation/conversation-feed/conversation-feed.component';
import { ProfilePreviewComponent } from '@shared/components/profile/profile-preview/profile-preview.component';
import { MessageInputComponent } from '@shared/components/inputs/message-input/message-input.component';
import { ConversationListContainerComponent } from '@shared/components/conversation/conversation-list-container/conversation-list-container.component';
import { MessageService } from '@core/services/message.service';
import { Discussion, Message } from '@core/models';

@Component({
  selector: 'app-conversation-list-item',
  standalone: true,
  imports: [
    ConversationFeedComponent,
    ProfilePreviewComponent,
    MessageInputComponent,
    ConversationListContainerComponent,
  ],
  providers: [MessageService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  private _messages!: Message[];

  constructor(private chatService: MessageService) {}

  ngOnInit(): void {
    this._messages = this.chatService.getMessages();
  }

  get messages(): Message[] {
    return this._messages;
  }

  onConversationItemClicked(discussion: Discussion) {
    console.log(discussion);
  }
}
