import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {ChatFeedComponent} from "../../../../pages/chat/chat-feed/chat-feed.component";
import {ProfilePreviewComponent} from "../../profile/profile-preview/profile-preview.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    ChatFeedComponent,
    ProfilePreviewComponent,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  message: string = '';

  constructor() {}

  sendMessage(event?: KeyboardEvent): void {
    // Vérifie si la touche pressée est 'Entrée'
    if (event?.key === 'Enter') {
      event.preventDefault();
    }

    this.message = '';
  }
}
