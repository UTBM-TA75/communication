import { Component } from '@angular/core';
import {ChatFeedComponent} from "../chat-feed/chat-feed.component";
import {ProfilePreviewComponent} from "../../../shared/components/profile/profile-preview/profile-preview.component";
import {MessageInputComponent} from "../../../shared/components/inputs/message-input/message-input.component";
import {
  ConversationWidgetContainerComponent
} from "../../dashboard/components/widgets/chat/conversation-widget-container/conversation-widget-container.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ChatFeedComponent,
    ProfilePreviewComponent,
    MessageInputComponent,
    ConversationWidgetContainerComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
