import { Component } from '@angular/core';
import { IGestureEvent } from './interfaces/gesture.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  gestureStart(ev: IGestureEvent) {
    console.log('touched', ev);
  }
  gestureMove(ev: IGestureEvent) {
    const target = ev.elem.nativeElement as HTMLDivElement;
    target.style.transform = `rotate(${ev.event.deltaY / 2}deg) translateX(${
      ev.event.deltaX
    }px)`;
    target.style.boxShadow = '5px 8px 8px #fcd';
  }
  gestureEnd(ev: IGestureEvent) {
    const target = ev.elem.nativeElement as HTMLDivElement;
    target.style.transform = '';
  }
}
