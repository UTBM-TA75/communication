import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {DateEphemerisComponent} from "@shared/components/date-ephemeris/date-ephemeris.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DateEphemerisComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
