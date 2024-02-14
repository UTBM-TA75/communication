import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '@core/config/app-config.service';
import { Discussion } from '@core/models';

@Injectable()
export class DiscussionService {
  private readonly path = '/discussions';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getUserDiscussions() {
    return this.http.get<Discussion[]>(this.appConfig.apiUrl + this.path);
  }
}
