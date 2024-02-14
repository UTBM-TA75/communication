import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConversationListItemComponent } from '@shared/components/conversation/conversation-list-item/conversation-list-item.component';
import { CommonModule } from '@angular/common';
import { Discussion } from '@core/models';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [ConversationListItemComponent, CommonModule],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {
  @Input() conversationList!: Array<Discussion>;
  @Output() conversationItemClicked = new EventEmitter<Discussion>();

  onConversationItemClicked(discussion: Discussion) {
    this.conversationItemClicked.emit(discussion);
  }
}
