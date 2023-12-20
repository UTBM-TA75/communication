import { Component } from '@angular/core';
import {DiscussionComponent} from "../discussion/discussion.component";
import {ProfileComponent} from "../profile/profile.component";
import {TextAreaComponent} from "../text-area/text-area.component";

@Component({
  selector: 'app-messagerie-window',
  standalone: true,
  imports: [
    DiscussionComponent,
    ProfileComponent,
    TextAreaComponent
  ],
  templateUrl: './messagerie-window.component.html',
  styleUrl: './messagerie-window.component.scss'
})
export class MessagerieWindowComponent {

}
