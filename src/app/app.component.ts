import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ChatFeedComponent} from "./pages/chat/chat-feed/chat-feed.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ChatFeedComponent, RouterLink, RouterLinkActive, DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'communication';
}
