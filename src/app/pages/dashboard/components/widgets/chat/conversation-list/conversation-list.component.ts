import { Component } from '@angular/core';
import { ConversationComponent } from '../conversation/conversation.component';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [ConversationComponent],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {}
