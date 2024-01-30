import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@core/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly path = '/events';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getEvents(startsBefore?: Date, starsAfter?: Date): Observable<Event[]> {
    const params = new HttpParams();
    if (startsBefore) {
      params.set('starts_before', startsBefore.toString());
    }
    if (starsAfter) {
      params.set('starts_after', starsAfter.toString());
    }

    return this.http.get<Event[]>(this.appConfig.apiUrl + this.path);
  }
}
