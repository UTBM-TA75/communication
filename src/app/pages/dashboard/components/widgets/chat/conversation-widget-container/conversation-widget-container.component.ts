import { Component, OnInit } from '@angular/core';
import { ConversationListComponent } from '../../../../../chat/components/conversation-list/conversation-list.component';
import { Discussion } from '../../../../../../core/models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { DiscussionService } from '@core/services/discussion.service';

@Component({
  selector: 'app-conversation-widget-container',
  standalone: true,
  imports: [AsyncPipe, ConversationListComponent],
  template: `
    @if (discussions$ | async; as discussions) {
      <app-conversation-list [conversationList]="discussions" />
    } @else {
      Erreur sur la récupération des discussions
    }
  `,
})
export class ConversationWidgetContainerComponent implements OnInit {
  discussions$!: Observable<Discussion[]>;

  constructor(private discussionService: DiscussionService) {}

  ngOnInit() {
    this.discussions$ = this.discussionService.getUserDiscussions();
  }
}
