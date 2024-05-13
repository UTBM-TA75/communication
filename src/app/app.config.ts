import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { authenticationInterceptor } from '@core/interceptors/auth.interceptor';

export function loadAppConfig(configService: AppConfigService) {
  return () => {
    return configService.load();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authenticationInterceptor]),
      withFetch(),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
    provideClientHydration(),
    provideAnimations(),
  ],
};
