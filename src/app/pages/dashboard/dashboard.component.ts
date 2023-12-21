import { Component } from '@angular/core';
import { EventCardComponent } from '@shared/components/event-card/event-card.component';
import {CalendarContainerComponent} from "./components/widgets/calendar-container/calendar-container.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EventCardComponent, CalendarContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
