import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreExampleComponent } from './components/firestore-example/firestore-example.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const routes: Routes = [
  { path: "", component: FirestoreExampleComponent },
];

@NgModule({
  declarations: [
    FirestoreExampleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AngularFirestoreModule,
    MaterialModule,
  ],
  exports: [RouterModule],
  entryComponents: [
    FirestoreExampleComponent,
  ],
})
export class AppRoutingModule { }
