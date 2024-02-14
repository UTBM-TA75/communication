import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Discussion, User } from '@core/models';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss',
})
export class ConversationComponent {
  @Input() user?: User;
  @Input() discussion!: Discussion;
}
