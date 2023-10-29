import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";

import { DynamicMatDialogModule } from "../dynamic-overlay-container/dynamic-overlay.module";
import { ScopedDialogComponent } from "./scoped-dialog/scoped-dialog.component";
import { ScopedHostComponent } from "./scoped-host/scoped-host.component";

@NgModule( {
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        DynamicMatDialogModule
    ],
    declarations: [ScopedHostComponent, ScopedDialogComponent],
    exports: [ScopedHostComponent]
} )
export class ScopedModule {
}
