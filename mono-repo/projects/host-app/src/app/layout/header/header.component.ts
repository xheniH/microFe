import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isAuthenticated: boolean = false;
  displayMenu: boolean = false;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$
      .pipe(
        tap((res: boolean) => {
          this.isAuthenticated = res;
          this.displayMenu = true;
        }),
        catchError(err => {
          this.displayMenu = true;
          return err;
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
