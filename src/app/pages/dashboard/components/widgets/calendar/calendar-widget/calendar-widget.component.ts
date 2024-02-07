import { Component, Input, OnInit } from '@angular/core';
import { CalendarListComponent } from '../calendar-list/calendar-list.component';
import { Event } from '@core/models';
import { D } from '@angular/cdk/keycodes';

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
    console.log(this.eventList);
    this.filterEvents();
  }

  filterEvents(): void {
    const today: Date = new Date(Date.now());
    this.eventList?.forEach((value: Event): void => {
      console.log(typeof value == typeof Event);
      const beg = new Date(Date.parse(value.beginning));
      if (
        beg.getDay() == today.getDay() &&
        beg.getMonth() == today.getMonth() &&
        beg.getFullYear() == today.getFullYear()
      ) {
        this.todayEvents.push(value);
      } else if (beg > today) {
        this.futureEvents.push(value);
      }
    });
  }
}
