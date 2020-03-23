import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public year = new Date().getFullYear();
  public user: firebase.User = null;

  constructor(private readonly auth: AngularFireAuth) { }

  public getUser(): Observable<firebase.User> {
    return this.auth.user;
  }

  public login() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout() {
    this.auth.auth.signOut();
  }
}
