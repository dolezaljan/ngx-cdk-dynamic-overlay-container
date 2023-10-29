import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { RouterModule } from "@angular/router";

import { DynamicMatDialogModule } from "../dynamic-overlay-container/dynamic-overlay.module";
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';
import { LazyHostComponent } from './lazy-host/lazy-host.component';

@NgModule( {
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        DynamicMatDialogModule,
        RouterModule.forChild([
            {
                path: '',
                component: LazyHostComponent,
                pathMatch: 'full'
            },
        ])
    ],
    declarations: [LazyHostComponent, LazyDialogComponent]
} )
export class LazyModule {
}
