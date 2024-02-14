import { Component } from '@angular/core';
import { CalendarWidgetContainerComponent } from './components/widgets/calendar/calendar-widget-container/calendar-widget-container.component';
import { ConversationListContainerComponent } from '@shared/components/conversation/conversation-list-container/conversation-list-container.component';
import { Router, RouterLink } from '@angular/router';
import { Discussion } from '@core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CalendarWidgetContainerComponent,
    ConversationListContainerComponent,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  onConversationItemClicked(discussion: Discussion) {
    console.log(discussion);
    this.router.navigate([`chat/${discussion.id}`]);
  }
}
