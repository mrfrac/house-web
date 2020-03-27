import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreExampleComponent } from './components/firestore-example/firestore-example.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ItemsListComponent } from './components/items-list/items-list.component';
// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', component: FirestoreExampleComponent, /* canActivate: [AngularFireAuthGuard] */ },
  { path: 'items', component: ItemsListComponent, }
];

@NgModule({
  declarations: [
    FirestoreExampleComponent,
    ItemsListComponent,
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
