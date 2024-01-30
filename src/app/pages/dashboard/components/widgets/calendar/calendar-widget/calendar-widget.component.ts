import { Component, Input, OnInit } from '@angular/core';
import { CalendarListComponent } from '../calendar-list/calendar-list.component';
import { Event } from '@core/models';

@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [CalendarListComponent],
  templateUrl: './calendar-widget.component.html',
})
export class CalendarWidgetComponent implements OnInit {
  @Input() eventList!: Array<Event>;

  todayEvents: Array<Event> = [];
  futureEvents: Array<Event> = [];

  ngOnInit(): void {
    this.filterEvents();
  }

  filterEvents(): void {
    const today: Date = new Date(Date.now());
    this.eventList?.forEach((value: Event): void => {
      console.log(typeof value == typeof Event);
      if (
        value.beginning.getDay() == today.getDay() &&
        value.beginning.getMonth() == today.getMonth() &&
        value.beginning.getFullYear() == today.getFullYear()
      ) {
        this.todayEvents.push(value);
      } else if (value.beginning > today) {
        this.futureEvents.push(value);
      }
    });
  }
}
