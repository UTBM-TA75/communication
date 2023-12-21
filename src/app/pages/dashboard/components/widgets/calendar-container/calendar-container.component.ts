import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CalendarListComponent} from "../calendar-list/calendar-list.component";
import {CalendarEvent} from "@core/models/event.model";
import {AsyncPipe} from "@angular/common";
import {EventService} from "@core/services/event.service";

@Component({
  selector: 'app-calendar-list-container',
  standalone: true,
  imports: [
    CalendarListComponent,
    AsyncPipe
  ],
  template: `
      <app-calendar-list [events]="events$ | async"/>
  `,
})
export class CalendarContainerComponent implements OnInit {
  events$!: Observable<CalendarEvent[]>;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    // TODO : replace me with the service call
    this.events$ = this.eventService.getEvents();
  }
}
