import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAuth0({
    domain: 'dev-jkx0w5qp0jdls8bn.us.auth0.com',
    clientId: '5mM0SNPPnxcLLjiR4TAos0VQgXx3HuBQ',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })]
};
