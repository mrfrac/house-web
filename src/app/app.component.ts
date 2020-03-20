import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <mat-toolbar color="primary">
          <a routerLink="/" class="logo">
              <mat-icon>home</mat-icon>
              <h1>Household</h1>
          </a>
          <span class="spacer"></span>
      </mat-toolbar>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      &copy; {{ year }}
    </footer>
  `,
  styles: []
})
export class AppComponent {
  year = new Date().getFullYear();
}
