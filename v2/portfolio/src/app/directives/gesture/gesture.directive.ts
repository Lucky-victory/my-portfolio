import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Gesture, GestureController, GestureDetail } from '@ionic/angular';
import { IGestureEvent } from '../../interfaces/gesture.interface';

@Directive({
  selector: '[appGesture]',
})
export class GestureDirective implements AfterViewInit, OnDestroy {
  private _gesture!: Gesture;
  @Input() panThreshold: number = 50;
  @Output() onGestureStart: EventEmitter<IGestureEvent> =
    new EventEmitter<IGestureEvent>();
  @Output() onGestureEnd: EventEmitter<IGestureEvent> =
    new EventEmitter<IGestureEvent>();
  @Output() onGestureMove: EventEmitter<IGestureEvent> =
    new EventEmitter<IGestureEvent>();
  constructor(
    private _gestureCtrl: GestureController,
    private _elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {
    this._createGesture();
  }

  private _createGesture() {
    this._gesture = this._gestureCtrl.create(
      {
        gestureName: 'page-slider',
        threshold: this.panThreshold,
        el: this._elementRef.nativeElement,

        onEnd: (ev: GestureDetail) => {
          this.onGestureEnd.emit({ event: ev, elem: this._elementRef });
        },
        onStart: (ev: GestureDetail) => {
          this.onGestureStart.emit({ event: ev, elem: this._elementRef });
        },
        onMove: (ev: GestureDetail) => {
          this.onGestureMove.emit({ event: ev, elem: this._elementRef });
        },
      },
      true
    );
    this._gesture.enable();
  }
  ngOnDestroy(): void {
    this._gesture.destroy();
  }
}
