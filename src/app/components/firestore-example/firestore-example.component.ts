import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-firestore-example',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of items | async">{{ item.text }}</mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class FirestoreExampleComponent implements OnInit {
  items: Observable<any>;

  constructor(private readonly firestore: AngularFirestore) {
    this.items = this.firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
    
  }

}
