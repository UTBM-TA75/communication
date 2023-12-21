import { Component } from '@angular/core';
import { CalendarItemComponent } from '@shared/components/calendar-item/calendar-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
