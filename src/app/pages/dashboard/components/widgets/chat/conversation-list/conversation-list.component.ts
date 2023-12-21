import { Component } from '@angular/core';
import { ConversationComponent } from '../conversation/conversation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [ConversationComponent, CommonModule],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {
  conversationList: Array<{
    username: string;
    lastMessage: string;
    messageDate: string;
    messagesNotSeen: number;
  }> = [
    {
      username: 'Sophi Stonebanks',
      lastMessage: 'Proin risus. Praesent lectus.',
      messageDate: '13/06/2023',
      messagesNotSeen: 2,
    },
    {
      username: 'Guillermo Windeatt',
      lastMessage: 'Etiam vel augue.',
      messageDate: '22/01/2023',
      messagesNotSeen: 8,
    },
    {
      username: 'Toma Moriarty',
      lastMessage:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      messageDate: '28/12/2022',
      messagesNotSeen: 8,
    },
    {
      username: 'Johnathon Cescoti',
      lastMessage:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      messageDate: '24/03/2023',
      messagesNotSeen: 1,
    },
    {
      username: 'Neely Letcher',
      lastMessage:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      messageDate: '25/04/2023',
      messagesNotSeen: 7,
    },
    {
      username: 'Xylina Barkes',
      lastMessage:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      messageDate: '08/05/2023',
      messagesNotSeen: 11,
    },
  ];
}
