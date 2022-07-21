import { ElementRef } from '@angular/core';
import { GestureDetail } from '@ionic/angular';

export interface IGestureEvent {
  event: GestureDetail;
  elem: ElementRef;
}
