import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DiscussionComponent} from "./components/chat/discussion/discussion.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, DiscussionComponent, RouterLink, RouterLinkActive, DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'communication';
}
