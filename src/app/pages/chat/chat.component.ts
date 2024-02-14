import { Component, OnInit } from '@angular/core';
import { ProfilePreviewComponent } from '@shared/components/profile/profile-preview/profile-preview.component';
import { MessageInputComponent } from '@shared/components/inputs/message-input/message-input.component';
import { Discussion, Message, User } from '@core/models';
import { ConversationFeedComponent } from '@shared/conversation/components/conversation-feed/conversation-feed.component';
import { ConversationListContainerComponent } from '@shared/conversation/components/conversation-list-container/conversation-list-container.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ConversationFeedComponent,
    ProfilePreviewComponent,
    MessageInputComponent,
    ConversationListContainerComponent,
    AsyncPipe,
  ],
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  discussion$!: Observable<Discussion>;
  messages$!: Observable<Message[]>;
  user$!: Observable<User>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.discussion$ = this.activatedRoute.data.pipe(
      map(({ discussion }) => discussion),
    );
    this.messages$ = this.activatedRoute.data.pipe(
      map(({ messages }) => messages),
    );
    this.discussion$.subscribe((value) => {
      this.user$ = this.userService.getUser(value.user2);
    });
  }

  onConversationItemClicked(discussion: Discussion) {
    this.router.navigate(['chat', discussion.id]);
    this.ngOnInit();
  }
}
