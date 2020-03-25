import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-user-panel',
  template: `
    <div class="user-info">
      <div *ngIf="user; else showLogin">
        <mat-icon>person</mat-icon>
        {{ user?.displayName }}
        <button mat-icon-button (click)="logout()">
          <mat-icon>exit_to_app</mat-icon>
        </button>
      </div>
      <ng-template #showLogin>
        <button mat-icon-button (click)="login()">
          <mat-icon>input</mat-icon>
        </button>
      </ng-template>
    </div>
  `,
  styles: []
})
export class UserPanelComponent implements OnInit, OnDestroy {
  public user: firebase.User | null;
  private userSubscription: Subscription;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router,  
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.auth.user.subscribe((user: firebase.User | null) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  public logout() {
    this.auth.auth.signOut();
    this.router.navigate(['/']);
  }

  public login() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
