import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {DiscussionComponent} from "../discussion/discussion.component";
import {ProfileComponent} from "../profile/profile.component";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    DiscussionComponent,
    ProfileComponent
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  message: string = '';

  constructor() {}

  sendMessage(event?: KeyboardEvent): void {
    // Vérifie si la touche pressée est 'Entrée'
    if (event?.key === 'Enter') {
      event.preventDefault(); // Empêche le saut de ligne dans le textarea
    }

    // Votre logique pour envoyer le message ici
    console.log('Message envoyé :', this.message);

    this.message = ''; // Efface le champ de saisie après l'envoi du message
  }

  insertEmoji(): void {
    // Logique pour insérer un émoji dans le texte en cours
  }

  insertDocument(): void {
    // Logique pour insérer un document dans le texte en cours
  }
}
