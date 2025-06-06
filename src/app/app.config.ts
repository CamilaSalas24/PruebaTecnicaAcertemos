import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AppRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient(),
    provideAnimations()
  ]
};

