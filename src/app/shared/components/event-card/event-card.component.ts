import {booleanAttribute, Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {DateEphemerisComponent} from "@shared/components/date-ephemeris/date-ephemeris.component";
import {DatePipe} from "@angular/common";
import {CalendarEvent} from "@core/models/event.model";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DateEphemerisComponent, DatePipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  // todo implement me in the template html
  @Input({transform: booleanAttribute}) ephemeris: boolean = true;
  @Input() calendarEvent!: CalendarEvent;
}
