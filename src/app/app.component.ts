import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { DynamicMatDialog } from "./dynamic-overlay-container/dynamic-mat-dialog";
import { RootDialogComponent } from "./root-dialog/root-dialog.component";

@Component( {
  selector: 'sst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {

  constructor( private mdDialog:MatDialog,
               private customDialog:DynamicMatDialog ) {
  }

  openDialog() {

    this.mdDialog.open( RootDialogComponent );
  }

  openCustomDialog() {

    this.customDialog.open( RootDialogComponent );
  }
}
