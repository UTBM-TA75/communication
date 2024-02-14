import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Discussion, User } from '@core/models';
import { UserService } from '@core/services/user.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss',
})
export class ConversationComponent implements OnInit {
  public user?: Observable<User>;

  @Input() discussion!: Discussion;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser(this.discussion.id);
  }
}
