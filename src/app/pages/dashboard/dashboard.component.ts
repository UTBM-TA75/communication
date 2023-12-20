import { Component } from '@angular/core';
import { ConversationListComponent } from './components/widgets/chat/conversation-list/conversation-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ConversationListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
