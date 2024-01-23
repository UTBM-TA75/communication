import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = 'replace-me';

  constructor() {}

  getAuthToken(): string {
    return this.token;
  }
}
