import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [
    DatePipe,
    MatSidenavModule
  ],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.scss'
})
export class ChatBubbleComponent {
  @Input() message!: { id: number; content: string; sentBy: 'user' | 'server'; timestamp: Date };
  @Input() isUserMessage!: boolean;
  @Input() position!: string;
  @Input() style!: string;



}
