import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CalendarEvent} from "@core/models/event.model";
import * as events from "events";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events$: Observable<CalendarEvent[]>;

  private events: Array<CalendarEvent> = [
    {
      id: 1,
      title: "Sortie à la ferme",
      description: "Une journée à la ferme a transporté nos sens dans un monde où la nature et l'agriculture se rencontrent harmonieusement. Le doux parfum de foin frais flottait dans l'air tandis que nous explorions les vastes champs et les étables remplies d'animaux curieux. Les rires joyeux des enfants résonnaient alors qu'ils découvraient la vie à la campagne, créant des souvenirs qui fleuriront comme des champs de coquelicots dans nos cœurs. Une expérience authentique, où le temps s'est arrêté pour nous permettre de savourer la simplicité rustique et la beauté sincère de la vie à la ferme.",
      startDate: new Date("2023-12-24T10:00"),
      endDate: new Date(),
    }
  ];

  constructor() {
    this.events$ = new Observable((subscriber) => {
      subscriber.next(this.events);
    })
  }

  getEvents(): Observable<CalendarEvent[]> {
    return this.events$;
  }
}
