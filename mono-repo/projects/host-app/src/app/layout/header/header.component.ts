import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwksValidationHandler, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../sso.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    console.log('login', window.location.origin);
    this.oauthService.initImplicitFlow();
  }

  logout() {
    console.log('logout');
    this.oauthService.logOut();
  }
}
