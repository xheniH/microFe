import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cart-app';

  isAuthenticated: boolean = false;

  constructor(public auth: AuthService) {
    this.auth.isAuthenticated$
      .pipe(
        tap((res)=> {
          console.error('cartttt', res);
          this.isAuthenticated = res;
        })
      ).subscribe();
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
  
}
