export class profileComponent {}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-preview',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent {
  profile = {
    firstName: 'Romain',
    lastName: 'LESAGE',
    information: 'Professeur de maths',
    photoUrl: '',
  };

  constructor() {}
}
