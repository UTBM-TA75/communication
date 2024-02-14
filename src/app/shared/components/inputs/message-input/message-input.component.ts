import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { ChatFeedComponent } from "../../../../pages/chat/chat-feed/chat-feed.component";
import { ProfilePreviewComponent } from "../../profile/profile-preview/profile-preview.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { ChatService } from "@core/services/chat.service";
import { AuthService } from "@core/services/auth.service"; // Assurez-vous d'utiliser le bon chemin

@Component({
  selector: "app-message-input",
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
  templateUrl: "./message-input.component.html",
  styleUrl: "./message-input.component.scss"
})
export class MessageInputComponent {
  message: string = ""; // Initialisation de la propriété message

  constructor(private chatService: ChatService, private authService: AuthService) {
  }

  sendMessage() {
    if (this.message.trim()) { // Vérifie si le message n'est pas juste des espaces
      this.chatService.addMessage({ content: this.message, sentBy: this.authService.user.id });
      this.message = ""; // Nettoie le champ de texte après l'envoi
    }
  }

  // Pour empêcher le formulaire de soumettre/recharger la page lors de l'appui sur "Entrée"
  handleEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêche le comportement par défaut (saut de ligne ou soumission de formulaire)
      this.sendMessage();
    }
  }
}
