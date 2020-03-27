import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-panel',
  template: `
    <button mat-button [matMenuTriggerFor]="menu">
      <mat-icon>menu</mat-icon> Menu
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="navigate('items')">
        <mat-icon>grade</mat-icon> Items
      </button>
      <button mat-menu-item>
      <mat-icon>list</mat-icon> Journals
      </button>
    </mat-menu>
  `,
  styles: []
})
export class MenuPanelComponent implements OnInit {

  constructor(private readonly router: Router) { }

  public navigate(path: string) {
    this.router.navigate([path])
  }

  ngOnInit(): void {
  }

}
