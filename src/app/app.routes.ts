import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { messagesResolver } from '@shared/conversation/resolvers/messages.resolver';
import { discussionResolver } from '@shared/conversation/resolvers/discussion.resolver';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'chat/:id',
    component: ChatComponent,
    resolve: { messages: messagesResolver, discussion: discussionResolver },
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];
