import { Location } from "@angular/common";
import { Inject, Injectable, Injector, Optional, Renderer2, SkipSelf } from "@angular/core";
import { DynamicDialog } from "./dynamic-dialog";
import { MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { OverlayContainer } from '@angular/cdk/overlay';
import { DynamicOverlay } from "./dynamic-overlay";
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Injectable()
export class DynamicMatDialog extends MatDialog {
  constructor(
    _overlay:DynamicOverlay,
    _injector:Injector,
    @Optional() location:Location,
    @Optional() @Inject(MAT_DIALOG_DEFAULT_OPTIONS) _defaultOptions: MatDialogConfig,
    @Inject( MAT_DIALOG_SCROLL_STRATEGY ) _scrollStrategy,
    @Optional() @SkipSelf() _parentDialog:DynamicMatDialog,
    _overlayContainer: OverlayContainer,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: 'NoopAnimations' | 'BrowserAnimations'
  ) {
    super( _overlay, _injector, location, _defaultOptions, _scrollStrategy, _parentDialog, _overlayContainer, animationMode );
    this._dialog = _injector.get(DynamicDialog);
  }

  public setContainerElement( containerElement:HTMLElement, renderer:Renderer2 ):void {

    // need to apply this styling to make the backdrop with position: fixed styling cover only the containerElement
    renderer.setStyle( containerElement, "transform", "translateZ(0)" );

    this._dialog.setContainerElement( containerElement );
  }
}
