import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Импорт маршрутов
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Провайдер маршрутизации
    provideHttpClient(), // Провайдер HttpClient
    importProvidersFrom(
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
    ), // Импорт Angular Material модулей
  ],
}).catch((err) => console.error(err));
