import { Component } from '@angular/core';
import { CalendarComponent } from './components/widgets/calendar/calendar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
