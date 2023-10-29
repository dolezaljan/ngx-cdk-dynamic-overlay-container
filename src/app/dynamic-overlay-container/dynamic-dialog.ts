import { Inject, Injectable, Injector, Optional, Renderer2, SkipSelf } from "@angular/core";
import { MAT_LEGACY_DIALOG_SCROLL_STRATEGY as MAT_DIALOG_SCROLL_STRATEGY } from "@angular/material/legacy-dialog";
import { Dialog, DialogConfig, DEFAULT_DIALOG_CONFIG, DIALOG_SCROLL_STRATEGY } from "@angular/cdk/dialog";
import { OverlayContainer } from '@angular/cdk/overlay';
import { DynamicOverlay } from "./dynamic-overlay";
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Injectable()
export class DynamicDialog extends Dialog {
  private _customOverlay:DynamicOverlay;

  constructor(
    _overlay:DynamicOverlay,
    _injector:Injector,
    @Optional() @Inject(DEFAULT_DIALOG_CONFIG) _defaultOptions: DialogConfig,
    @Optional() @SkipSelf() _parentDialog: Dialog,
    _overlayContainer: OverlayContainer,
    @Inject( DIALOG_SCROLL_STRATEGY ) _scrollStrategy: any,
  ) {
    super( _overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, _scrollStrategy );
    this._customOverlay = _overlay;
  }

  public setContainerElement( containerElement:HTMLElement, renderer:Renderer2 ):void {
    this._customOverlay.setContainerElement( containerElement );
  }
}
